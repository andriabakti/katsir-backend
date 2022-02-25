module.exports = {
	response: (res, result, status, message, links, error) => {
		const resp = {}
		resp.status = 'Success'
		resp.status_code = status
		resp.message = message
		resp.result = result
		resp.error = error || null
		if (links) {
			resp.page_info = links
		}
		return res.status(resp.status_code).json(resp)
	},
	status: {
		found: 'Data found',
		insert: 'Data successfully added',
		update: 'Data successfully updated',
		delete: 'Data successfully deleted'
	},
	pageInfo: (limit, start, total, count) => {
		const numStart = start === 0 ? 1 : start
		const last = Math.ceil(total / limit)
		const result = {
			total_page: last ? last : 1,
			current_page: numStart,
			next_page: count < limit || numStart === last ? null : numStart + 1,
			prev_page: numStart === 0 || numStart === 1 ? null : numStart - 1,
			first_page: numStart === 1 ? null : 1,
			last_page: numStart === last ? null : last,
			total_item: total,
			per_page: limit,
			count: count
		}
		return result
	}
}

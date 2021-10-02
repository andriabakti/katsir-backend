module.exports = {
	response: (res, result, status, message, links, error) => {
		const resp = {}
		resp.success = !error
		if (!error) {
			resp.status_code = status || null
			resp.message = message || null
		} else {
			resp.error = error
		}
		resp.data = result
		if (links) {
			resp.page_info = links
		}
		return res.status(status).json(resp)
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
	},
	errors: {
		notFound: {
			code: 'ERR_NOT_FOUND',
			statusCode: 404,
			sqlMessage: 'Data Not Found'
		},
		checkStatusCode: (error) => {
			const code = Number(error)
			if (code === 1048 || code === 1366) {
				return 404
			} else if (code === 1146 || code === 1054 || code === 1051) {
				return 500
			} else {
				return 400
			}
		}
	}
}

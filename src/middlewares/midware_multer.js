// package: multer
const multer = require("multer")
// package: cloudinary
const cloudinary = require("cloudinary").v2
// package: multer-storage-cloudinary
const { CloudinaryStorage } = require("multer-storage-cloudinary")
// env: cloudinary
const { CLOUD_NAME, CLOUD_KEY, CLOUD_SECRET } = process.env

cloudinary.config({
	cloud_name: CLOUD_NAME,
	api_key: CLOUD_KEY,
	api_secret: CLOUD_SECRET
})

const storage = new CloudinaryStorage({
	cloudinary,
	params: {
		folder: "app_Katsir"
	}
})

module.exports = multer({
	storage
}).single("image")

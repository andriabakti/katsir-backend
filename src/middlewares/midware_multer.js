const multer = require('multer')
const { diskStorage } = require('multer')

const storage = diskStorage({
  destination: function (_req, _file, cb) {
    cb(null, './uploads')
  },
  filename: function (_req, file, cb) {
    const unique = Date.now()
    const date = new Date().toDateString().split(' ').join('_')
    const time = new Date().toLocaleTimeString('id')
    const name = file.originalname.split(' ').join('_')
    cb(null, `${unique}-${date}-${time}-${name}`)
  }
})

const checkFileType = ({ mimetype }, cb) => {
  if (
    mimetype === 'image/png' ||
    mimetype === 'image/jpg' ||
    mimetype === 'image/jpeg'
  ) {
    cb(null, true)
  } else {
    cb(null, false)
    return cb(new Error('Only .png, .jpg and .jpeg format allowed!!'))
  }
}

module.exports = multer({
  storage: storage,
  limits: {
    fileSize: 1 * 1024 * 1024
  },
  fileFilter: function (_req, file, cb) {
    checkFileType(file, cb)
  }
}).single('image')
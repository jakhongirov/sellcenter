const path = require('path')
const multer = require('multer')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.resolve(__dirname, '..', '..', 'public/images'));
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname.split(" ").join(""))
    }
})
const upload = multer({
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 } // Set maximum file size to 5 MB
})

module.exports = upload
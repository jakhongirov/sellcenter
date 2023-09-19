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
    limits: { fileSize: 3 * 1024 * 1024 } // Set maximum file size to 3 MB
})

module.exports = upload
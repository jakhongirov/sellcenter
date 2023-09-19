"use strict";

var path = require('path');

var multer = require('multer');

var storage = multer.diskStorage({
  destination: function destination(req, file, cb) {
    cb(null, path.resolve(__dirname, '..', '..', 'public/images'));
  },
  filename: function filename(req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname.split(" ").join(""));
  }
});
var upload = multer({
  storage: storage,
  limits: {
    fileSize: 3 * 1024 * 1024
  } // Set maximum file size to 3 MB

});
module.exports = upload;
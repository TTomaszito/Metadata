var express = require('express');
var multer  = require('multer')
var filesize = require('file-size');

var router = express.Router();
var upload = multer({ dest: 'uploads/' })


router.post('/upload', upload.single('pic'), function(req, res, next) {
  console.log('files:', req.file);

  var uploadsize = filesize(req.file.size).human();

    res.json({filename:req.file.originalname,
              filesize: uploadsize


    });
});


module.exports = router;

var express = require('express');
var multer  = require('multer')
var filesize = require('file-size');
var script = require('./bin/script');

var router = express.Router();
var upload = multer({ dest: 'uploads/' })


router.post('/upload', upload.single('pic'), function(req, res, next) {


  var uploadsize = filesize(req.file.size).human('si');

    res.json({filename:req.file.originalname,
              filesize: uploadsize
            });

    script.clearuploads(req.file.filename);
});


module.exports = router;

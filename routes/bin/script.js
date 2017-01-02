
module.exports = {

   clearuploads: function (filename){
     var fs = require('fs');

     fs.unlinkSync('uploads/'+ filename);
     console.log('file has been removed');

   }
};

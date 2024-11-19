const multer = require('multer');

const path = require('path')

const storage = multer.diskStorage({
    destination : function (req, file, cd){
        cd(null, path.resolve(__dirname, '../uploadImage'));

    },
    filename : function(req, file, cd){
        cd(null, file.originalname);
    }
})

const upload = multer({
    storage : storage,
    limits : {fileSize : 500000},
})

module.exports = upload ;
import multer from "multer";  // expressjs multer documentation   https://github.com/expressjs/multer 

const storage = multer.diskStorage({   
    destination: function (req, file, cb) {
        cb(null, "/public/temp")
    },
    filename: function (req, file, cb) {  // cb -- callback
        cb(null, file.originalname)
    }
})
export const upload = multer({ 
    storage: storage 
})
import multer from "multer";
import path from'path';

//multer config;
var storage = multer.diskStorage({
 fileFilter : (req , file, cb)=>{
    let ext = path.extname(file.originalname);
    if(ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png"){
        cb(new Error("file type is not supported"), false);
    }
    cb(null, true);
}
})

const upload = multer({storage:storage}).single('image');

export default upload ;
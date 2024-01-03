import multer from "multer";
import path from "path";
import fs from "fs";
import ShortUniqueId from 'short-unique-id';
const uid = new ShortUniqueId();


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
      const uploadPath = "./media";
    try {
      fs.mkdirSync(uploadPath, { recursive: true });
      cb(null, uploadPath);
    } catch (error) {
      cb(error);
    }
  },
  filename: function (req, file, cb) {
    
    const ext = file.originalname.substring(file.originalname.lastIndexOf('.'), file.originalname.length)
    cb(null, uid.rnd()+'_'+Date.now() + ext);
  },
});

const upload = multer({ storage: storage });
export default upload;

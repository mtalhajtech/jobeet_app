import multer from "multer";

const upload = multer({dest:'./media'});
export default upload;

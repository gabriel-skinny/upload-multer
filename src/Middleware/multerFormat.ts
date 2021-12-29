import { Request, Response, NextFunction} from "express";
import multer, { MulterError } from "multer";

export const multerFormat = (req: Request, res: Response, next: NextFunction) => {
    const multerconfig = multer({
        preservePath: true,
        dest: "./tmp",
        limits: {
            fileSize: 1000000
        },    
        fileFilter: (req, file, cb: any) => {
            console.log({file: file.mimetype});
            if (file.mimetype.split("/")[0] !== "image") {
                cb(new Error("Only images accepted"), null);
            }

            cb(null, file);
        }
    });
    
    const upload = multerconfig.single("img");

    upload(req, res, (err) => {
        if (err instanceof MulterError) {
            res.status(401).json({ Error: "Error when downloading file" });
        } else if (err) {
            res.status(500).json({ Error: err.message})
        }else {
            next();  
        }       
    })
}
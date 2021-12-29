import { Request, Response, NextFunction } from "express";

export const fileFormat = (req: Request, res: Response, next: NextFunction): void | Response => {
    
    if (!(req.headers["content-type"]?.match('multipart/form-data') && req.headers["content-length"])) {
        return res.status(401).json({ Error: "format not valid"})
    }
    
    const content_size = parseInt(req.headers["content-length"] as string);
    const sizeOfNonFileField = 150;
    const nonFileFields = Object.keys(req.fields as Object).length;
    const fileSize = content_size - (sizeOfNonFileField * nonFileFields);
    const limitMinSize = 2;

    if (fileSize < limitMinSize) {
        return res.status(401).json({ Error: "File to small"});
    }

    next();
}
import { Request, Response, NextFunction } from "express";

export const fileFormat = (req: Request, res: Response, next: NextFunction): void | Response => {
    
    if (!(req.headers["content-type"]?.match('multipart/form-data') && req.headers["content-length"])) {
        return res.status(401).json({ Error: "format not valid"})
    }
    
    const content_size = parseInt(req.headers["content-length"] as string);
    const limitMinSize = 20000;

    if (content_size < limitMinSize) {
        return res.status(401).json({ Error: "File to small"});
    }

    next();
}
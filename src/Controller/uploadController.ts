import { Request, Response } from "express";

class uploadController {
    handle(req: Request, res: Response) {

        return res.json({ok: true});
    }
}

export { uploadController };
import { Router } from "express";
import { uploadController } from "./Controller/uploadController";
import { fileFormat } from "./Middleware/fileFormat";
import { multerFormat } from "./Middleware/multerFormat";
import formidable from "express-formidable";

const routes = Router();

routes.post("/upload", formidable(), fileFormat, multerFormat,new uploadController().handle);

export { routes };
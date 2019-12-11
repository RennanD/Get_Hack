import { Router } from "express";
import multer from 'multer'

import authMiddleware from "./app/middlewares/auth";
import multerConfig from './config/multer'


import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import FileController from "./app/controllers/FileController";

const routes = Router();
const upload = multer(multerConfig)

routes.post("/users", UserController.store);
routes.post("/sessions", SessionController.store);

routes.post('/files', upload.single('file'),  FileController.store)

// Authenticate routes

routes.use(authMiddleware);

routes.put("/users", UserController.update);


export default routes;

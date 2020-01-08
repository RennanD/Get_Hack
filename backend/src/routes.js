import { Router } from "express";
import multer from "multer";

import authMiddleware from "./app/middlewares/auth";
import multerConfig from "./config/multer";

import UserController from "./app/controllers/UserController";
import SessionController from "./app/controllers/SessionController";
import FileController from "./app/controllers/FileController";
import HackathonController from "./app/controllers/HackathonController";
import SubscriptionController from "./app/controllers/SubscriptionController";
import AvaliableController from "./app/controllers/AvaliableController";

const routes = Router();
const upload = multer(multerConfig);

//Authentication routes

routes.post("/users", UserController.store);
routes.post("/sessions", SessionController.store);

// Updload files

routes.post("/files", upload.single("file"), FileController.store);

// Authenticate routes

routes.use(authMiddleware);

routes.put("/users", UserController.update);

// Organizer hackathons routes

routes.get("/hackathons", HackathonController.index);
routes.get("/hackathons/:id/details", HackathonController.show);
routes.post("/hackathons", HackathonController.store);
routes.put("/hackathons/:id", HackathonController.update);
routes.delete("/hackathons/:id", HackathonController.destroy);

// Routes for user see hackathons

routes.get("/hackathons/avaliable", AvaliableController.index);
routes.get("/hackathons/subscriptions", SubscriptionController.index);
routes.post("/hackathons/:id/subscribe", SubscriptionController.store);

export default routes;

import { Router } from "express";

import estudantesController from "./app/controllers/EstudantesController.js";
import indexController from "./app/controllers/IndexController.js";

const routes = Router();

routes.get("/" , indexController.index)
routes.get("/listar" , estudantesController.listar)

export default routes
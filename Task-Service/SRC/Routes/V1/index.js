import express  from "express";
import TaskRoutes from "./task-routes.js";

const router = express.Router();

router.use("/tasks",TaskRoutes);

export default router;
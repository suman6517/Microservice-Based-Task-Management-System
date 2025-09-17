import express from "express";
import controllers from "../../Controlllers/index.js";

const router = express.Router();

router.post("/",controllers.taskCreation);
router.get("/",controllers.allTasks);

export default router;
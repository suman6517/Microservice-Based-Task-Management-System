import express from "express";
import controllers from "../../Controlllers/index.js";

const router = express.Router();

router.post("/",controllers.userCreation);
router.get("/",controllers.allUsers);

export default router;
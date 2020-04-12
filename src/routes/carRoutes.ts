import {CarController} from "../controller/CarController";
import {Router} from "express";

const router = Router();

router.get("/", CarController.all);
router.get("/:id", CarController.one)
router.post("/", CarController.save);
router.post("/:id", CarController.remove);

export default router;
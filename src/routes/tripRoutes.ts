import {TripController} from "../controller/TripController";
import {Router} from "express";

const router = Router();

router.get("/", TripController.all);
router.get("/:id", TripController.one)
router.post("/", TripController.save);
router.delete("/:id", TripController.remove);

export default router;
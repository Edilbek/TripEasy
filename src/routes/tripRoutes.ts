import {TripController} from "../controller/TripController";
import {Router} from "express";

const router = Router();

router.get("/", TripController.all);
router.post("/myTrips/", TripController.myTrips);
router.post("/search", TripController.search);
router.get("/:id", TripController.one)
router.post("/", TripController.save);
router.put("/:id", TripController.edit);
router.delete("/:id", TripController.remove);

export default router;
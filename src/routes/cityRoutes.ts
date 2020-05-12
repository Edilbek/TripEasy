import {CityController} from "../controller/CityController";
import {Router} from "express";

const router = Router();

router.get("/", CityController.all);
router.get("/:id", CityController.one)
router.get("/waypoints/byIds", CityController.waypoints)
router.post("/", CityController.save);
router.delete("/:id", CityController.remove);

export default router;

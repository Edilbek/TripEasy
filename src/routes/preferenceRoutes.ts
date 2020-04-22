import {PreferenceController} from "../controller/PreferenceController";
import {Router} from "express";

const router = Router();

router.get("/", PreferenceController.all);
router.get("/:id", PreferenceController.one)
router.post("/", PreferenceController.save);
router.delete("/:id", PreferenceController.remove);

export default router;

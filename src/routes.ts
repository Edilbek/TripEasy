import { Router, Request, Response } from "express";
import auth from "./routes/authRoutes";
import user from "./routes/userRoutes";
import car from "./routes/carRoutes";
import preference from "./routes/preferenceRoutes";
import city from "./routes/cityRoutes";

const router = Router();

router.use("/auth", auth);
router.use("/users", user);
router.use("/cars", car);
router.use("/preferences", preference);
router.use("/cities", city);

export default router;
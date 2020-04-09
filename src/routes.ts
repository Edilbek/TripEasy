import {userRoutes} from "./routes/userRoutes";
import {carRoutes} from "./routes/carRoutes";
import {preferenceRoutes} from "./routes/preferenceRoutes";

const Array = [];
const ConcatArray = Array.concat(userRoutes, carRoutes, preferenceRoutes);
export const Routes = [...ConcatArray];

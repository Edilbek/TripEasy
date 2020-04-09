import {CarController} from "../controller/CarController";

export const carRoutes = [{
    method: "get",
    route: "/cars",
    controller: CarController,
    action: "all"
}, {
    method: "get",
    route: "/cars/:id",
    controller: CarController,
    action: "one"
}, {
    method: "post",
    route: "/cars",
    controller: CarController,
    action: "save"
}, {
    method: "delete",
    route: "/cars/:id",
    controller: CarController,
    action: "remove"
}];
import {UserController} from "./controller/UserController";
import {CarController} from "./controller/CarController";
import {PreferenceController} from "./controller/PreferenceController";

export const Routes = [{
    method: "get",
    route: "/users",
    controller: UserController,
    action: "all"
}, {
    method: "get",
    route: "/users/:id",
    controller: UserController,
    action: "one"
}, {
    method: "post",
    route: "/users",
    controller: UserController,
    action: "save"
}, {
    method: "delete",
    route: "/users/:id",
    controller: UserController,
    action: "remove"
},

{
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
},

{
    method: "get",
    route: "/preferences",
    controller: PreferenceController,
    action: "all"
}, {
    method: "get",
    route: "/preferences/:id",
    controller: PreferenceController,
    action: "one"
}, {
    method: "post",
    route: "/preferences",
    controller: PreferenceController,
    action: "save"
}, {
    method: "delete",
    route: "/preferences/:id",
    controller: PreferenceController,
    action: "remove"
},];

import {PreferenceController} from "../controller/PreferenceController";

export const preferenceRoutes = [{
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
}];

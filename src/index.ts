import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import {Request, Response} from "express";
import {Routes} from "./routes";
import {User} from "./entity/User";
import {Car} from "./entity/Car";

createConnection().then(async connection => {

    // create express app
    const app = express();
    app.use(bodyParser.json());

    // register express routes from defined application routes
    Routes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next);
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

            } else if (result !== null && result !== undefined) {
                res.json(result);
            }
        });
    });

    // setup express app here
    // ...

    // start express server
    app.listen(3000);

    // insert new users for test
    let car = new Car();
    car.car_model = "Mercedes-AMG G 63";
    car.country = "Germany";
    car.car_number = "ED2020";

    let user = new User();
    user.email = "edil.talantbekov@gmail.com";
    user.password = "parol123";
    user.name = "Edil";
    user.surname = "Talantbekov";
    user.gender = "Male";
    user.date_of_Birth = new Date(Date.now());
    user.phone = "996709312818";
    user.inf_about_yourself = "Music, Programming";
    user.car = car;

    await connection.manager.save(car);
    console.log("Car has been saved");

    await connection.manager.save(user);
    console.log("User has been saved");

    console.log("Express server has started on port 3000. Open http://localhost:3000/users to see results");

}).catch(error => console.log(error));

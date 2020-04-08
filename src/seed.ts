import "reflect-metadata";
import {createConnection} from "typeorm";
import {User} from "./entity/User";
import {Car} from "./entity/Car";
import {City} from "./entity/City";
import {Preference} from "./entity/Preference";
import {Passenger} from "./entity/Passenger";
import {IntermediatePoint} from "./entity/IntermediatePoint";
import {Trip} from "./entity/Trip";

createConnection().then(async connection => {
    // insert new users for test
    let car = new Car();
    let user = new User();
    let city = new City();
    let city1 = new City();
    let city2 = new City();
    let preference = new Preference();
    let passenger = new Passenger();
    let trip = new Trip();
    let point = new IntermediatePoint();

    car.car_model = "Mercedes-AMG G 63";
    car.country = "Germany";
    car.car_number = "ED2020";

    preference.talk = 0;
    preference.smoke = 2;
    preference.animal = 0;
    preference.music = 0;

    user.email = "edil.talantbekov@gmail.com";
    user.password = "parol123";
    user.name = "Edil";
    user.surname = "Talantbekov";
    user.gender = 0;
    user.date_of_Birth = new Date();
    user.phone = "996709312818";
    user.inf_about_yourself = "Music, Programming",
    user.car = car;
    user.preference = preference;

    city.name = "Bishkek";
    city1.name = "Osh";
    city2.name = "Naryn";

    trip.point_of_shipment = city;
    trip.destination = city1;
    trip.date_time = new Date();
    trip.price = 1350;
    trip.amount_of_seats = 6;
    trip.free_seats = 3;

    passenger.user = user;
    passenger.trip = trip;

    point.trip = trip;
    point.points = city2;

    await connection.manager.save(car);
    console.log("Car has been saved");

    await connection.manager.save(user);
    console.log("User has been saved");

    await connection.manager.save(city);
    console.log("City has been saved");

    await connection.manager.save(preference);
    console.log("Preference has been saved");

    await connection.manager.save(trip);
    console.log("Trip has been saved");

    await connection.manager.save(passenger);
    console.log("Passenger has been saved");

    await connection.manager.save(point);
    console.log("Intermediate Point has been saved");

}).catch(error => console.log(error));

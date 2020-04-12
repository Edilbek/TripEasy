import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Car} from "../entity/Car";

export class CarController {

    static all = async (req: Request, res: Response, next: NextFunction) => {
        //Get cars from database
        const carRepository = getRepository(Car);
        const cars = await carRepository.find();
        //Send the cars object
        res.send(cars);
    };

    static one = async (req: Request, res: Response, next: NextFunction) => {
        const carRepository = getRepository(Car);
        try {
            const car = await carRepository.findOneOrFail(req.params.id);
            res.send(car);
        } catch (error) {
            res.status(404).send("Car not found");
        }
    }
    static save = async (req: Request, res: Response, next: NextFunction) => {
        const carRepository = getRepository(Car);
        let {car_model, country, car_number} = req.body;
        let car = new Car();

        car.car_model = car_model;
        car.country = country;
        car.car_number = car_number;

        // Try to save.
        try {
            await carRepository.save(car);
        } catch (error) {
            res.status(409).send("Check fields");
            return;
        }

        // If all ok, send 201 response
        res.status(201).send(car);
    }

    static remove = async (req: Request, res: Response, next: NextFunction) => {
        const carRepository = getRepository(Car);
        let carToRemove = await carRepository.findOne(req.params.id);

        try {
            await carRepository.remove(carToRemove);
        } catch (error) {
            res.status(404).send("Car not found");
            return;
        }

        // After all send a 201 response
        res.status(201).send("Car deleted");
    }

}
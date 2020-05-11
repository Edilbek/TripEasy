import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Trip} from "../entity/Trip";
import {IntermediatePoint} from "../entity/IntermediatePoint";

export class TripController {

    static all = async (req: Request, res: Response, next: NextFunction) => {
        //Get trips from database
        const tripRepository = getRepository(Trip);
        const trips = await tripRepository.find();
        //Send the trips object
        res.send(trips);
    };

    static one = async (req: Request, res: Response, next: NextFunction) => {
        const tripRepository = getRepository(Trip);
        try {
            const trip = await tripRepository.findOneOrFail(req.params.id);
            res.send(trip);
        } catch (error) {
            res.status(404).send("Trip not found");
        }
    }
    static save = async (req: Request, res: Response, next: NextFunction) => {
        const tripRepository = getRepository(Trip);
        const pointRepository = getRepository(IntermediatePoint);

        let {driver, point_of_shipment, destination, date_time, price, amount_of_seats, free_seats, waypoints} = req.body;
        let trip = new Trip();
        let intermediate_point = new IntermediatePoint();

        trip.driver = driver;
        trip.point_of_shipment = point_of_shipment;
        trip.destination = destination;
        trip.date_time = date_time;
        trip.price = price;
        trip.amount_of_seats = amount_of_seats;
        trip.free_seats = free_seats;
        trip.waypoints = waypoints

        for (let i = 0; i < waypoints.length; i++) {
            intermediate_point.trip = trip;
            intermediate_point.points = waypoints[i];

            await pointRepository.save(intermediate_point)
        }
        // Try to save.
        try {
            await tripRepository.save(trip);
        } catch (error) {
            res.status(409).send("Check fields");
            return;
        }

        // If all ok, send 201 response
        res.status(201).send(trip);
    }

    static remove = async (req: Request, res: Response, next: NextFunction) => {
        const tripRepository = getRepository(Trip);
        let tripToRemove = await tripRepository.findOne(req.params.id);

        try {
            await tripRepository.remove(tripToRemove);
        } catch (error) {
            res.status(404).send("Trip not found");
            return;
        }

        // After all send a 201 response
        res.status(201).send("Trip deleted");
    }

}

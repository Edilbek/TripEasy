import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {City} from "../entity/City";

export class CityController {

    static all = async (req: Request, res: Response, next: NextFunction) => {
        //Get cities from database
        const cityRepository = getRepository(City);
        const cities = await cityRepository.find();
        //Send the cities object
        res.send(cities);
    };

    static one = async (req: Request, res: Response, next: NextFunction) => {
        const cityRepository = getRepository(City);
        try {
            const city = await cityRepository.findOneOrFail(req.params.id);
            res.send(city);
        } catch (error) {
            res.status(404).send("City not found");
        }
    }
    static save = async (req: Request, res: Response, next: NextFunction) => {
        const cityRepository = getRepository(City);
        let {name} = req.body;
        let city = new City();

        city.name = name;

        // Try to save.
        try {
            await cityRepository.save(city);
        } catch (error) {
            res.status(409).send("Check fields");
            return;
        }

        // If all ok, send 201 response
        res.status(201).send(city);
    }

    static remove = async (req: Request, res: Response, next: NextFunction) => {
        const cityRepository = getRepository(City);
        let cityToRemove = await cityRepository.findOne(req.params.id);

        try {
            await cityRepository.remove(cityToRemove);
        } catch (error) {
            res.status(404).send("City not found");
            return;
        }

        // After all send a 201 response
        res.status(201).send("City deleted");
    }

}
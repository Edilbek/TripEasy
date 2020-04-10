import {getRepository} from "typeorm";
import {NextFunction, Request, Response} from "express";
import {Preference} from "../entity/Preference";

export class PreferenceController {

    private preferenceRepository = getRepository(Preference);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.preferenceRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.preferenceRepository.findOne(request.params.id);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.preferenceRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let carToRemove = await this.preferenceRepository.findOne(request.params.id);
        await this.preferenceRepository.remove(carToRemove);
        return "Preference deleted successfully";
    }

}

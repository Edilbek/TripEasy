import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Car {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({length:50})
    car_model: string;

    @Column({length:50})
    country: string;

    @Column({length:50})
    car_number: string;
}

import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import {IntermediatePoint} from "./IntermediatePoint"

@Entity()
export class City {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({length:70})
  name: string;
}

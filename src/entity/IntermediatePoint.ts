import {Entity, PrimaryGeneratedColumn, Column, Index, ManyToOne, JoinColumn} from "typeorm";
import {Trip} from "./Trip"
import {City} from "./City"

@Entity()
export class IntermediatePoint {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => Trip, Trip => Trip.id, {
      nullable: false,
      cascade: true
  })
  @JoinColumn()
  trip: Trip;

  @ManyToOne(type => City, City => City.id, {
      nullable: false,
      cascade: true
  })
  @JoinColumn()
  points: City;
}

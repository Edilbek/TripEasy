import {Entity, PrimaryGeneratedColumn, Column, Index, ManyToOne, JoinColumn} from "typeorm";
import {User} from "./User";
import {Trip} from "./Trip";

@Entity()
export class Passenger {
  
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => User, User => User.id, {
      nullable: false,
      cascade: true
  })
  @JoinColumn()
  user: User;

  @ManyToOne(type => Trip, Trip => Trip.id, {
      nullable: false,
      cascade: true
  })
  @JoinColumn()
  trip: Trip;
}

import {Entity, PrimaryGeneratedColumn, Column, Index, ManyToOne, JoinColumn} from "typeorm";
import {City} from "./City";
import {User} from "./User";
import {IntermediatePoint} from "./IntermediatePoint";

@Entity()
export class Trip {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => User, user => user.id, {
    nullable: false,
    cascade: true
  })
  @JoinColumn()
  driver: User;

  @ManyToOne(type => City, City => City.id, {
      nullable: false,
      cascade: true
  })
  @JoinColumn()
  point_of_shipment: City;

  @ManyToOne(type => City, City => City.id, {
      nullable: false,
      cascade: true
  })
  @JoinColumn()
  destination: City;

  @Column("date", {nullable: false})
  date_time: Date;

  @Column("float")
  price: number;

  @Column()
  amount_of_seats: number;

  @Column()
  free_seats: number;

}

import {Entity, PrimaryGeneratedColumn, Column, Index, ManyToOne, JoinColumn} from "typeorm";
import {City} from "./City";

@Entity()
export class Trip {

  @PrimaryGeneratedColumn()
  id: number;

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

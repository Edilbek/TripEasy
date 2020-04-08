import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";
import {User} from "./User";

enum Status {
  good,
  normal,
  bad
}

@Entity()
export class Preference {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  talk: Status;

  @Column()
  smoke: Status;

  @Column()
  animal: Status;

  @Column()
  music: Status;
}

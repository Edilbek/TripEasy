import {Entity, PrimaryGeneratedColumn, Column, Index, ManyToOne, JoinColumn} from "typeorm";
import {Car} from "./Car";
import {Preference} from "./Preference";
import * as bcrypt from "bcryptjs";

enum Gender {
  male,
  femal
}

@Entity({name:"users"})
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false,
        length:50
    })
    @Index({ unique: true })
    email: string;

    @Column({
        nullable: false,
        length:100
    })
    password: string;

    @Column({
        length: 100,
        nullable: false
    })
    name: string;

    @Column({length: 100,nullable: false})
    surname: string;

    @Column({nullable: false})
    gender: Gender;

    @Column("date", {nullable: false})
    date_of_Birth: Date;

    @Index({ unique: true })
    @Column({nullable: false, length:50})
    phone: string;

    @Column("text")
    inf_about_yourself: string;

    @ManyToOne(type => Car, Car => Car.id, {
        nullable: false,
        cascade: true
    })
    @JoinColumn()
    car: Car;

    @ManyToOne(type => Preference, Preference => Preference.id, {
        nullable: false,
        cascade: true
    })
    @JoinColumn()
    preference: Preference;

    hashPassword() {
        this.password = bcrypt.hashSync(this.password, 8);
    }
    checkIfUnencryptedPasswordIsValid(unencryptedPassword: string) {
        return bcrypt.compareSync(unencryptedPassword, this.password);
    }

}

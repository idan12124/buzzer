import {
  Entity,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToOne,
  JoinColumn,
  Column,
} from "typeorm";
import Division from "./division";

@Entity()
export default class Agent extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: Number;

  @OneToOne(() => Division)
  @JoinColumn()
  divisionId: Number;
}

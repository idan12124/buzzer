import {
  Entity,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToOne,
  JoinColumn,
  Column,
  OneToMany,
  ManyToOne,
} from "typeorm";
import Division from "./division";

@Entity()
export default class Agent extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: Number;

  @ManyToOne(() => Division)
  @JoinColumn()
  divisionId: Number;
}

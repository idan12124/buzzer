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

  @Column({ nullable: true })
  divisionId: number;

  @ManyToOne(() => Division)
  @JoinColumn({ name: "divisionId" })
  divisionID: Number;
}

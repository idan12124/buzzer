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

  @Column({nullable: true})
  divisionId: Number;
  
  @ManyToOne(() => Division)
  @JoinColumn()
  divisionID: Number;
}

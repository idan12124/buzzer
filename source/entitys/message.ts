import {
  Entity,
  PrimaryGeneratedColumn,
  BaseEntity,
  OneToOne,
  JoinColumn,
  Column,
  ManyToOne,
} from "typeorm";
import Division from "./division";

@Entity()
export default class Message extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: Number;

  @Column()
  content: String;

  @Column()
  done: boolean;

  @ManyToOne(() => Division)
  @JoinColumn()
  divisionId: Number;
}

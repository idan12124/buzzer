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
import Message from "./message";

@Entity()
export default class Dispatch extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: Number;

  @Column({ type: "date" })
  timestamp: String;

  @ManyToOne(() => Message)
  messageId: Number;

  @ManyToOne(() => Division)
  @JoinColumn()
  divisionId: Number;
}

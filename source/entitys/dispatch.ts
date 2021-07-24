import {
  Entity,
  PrimaryGeneratedColumn,
  BaseEntity,
  JoinColumn,
  Column,
  ManyToOne,
} from "typeorm";
import Agent from "./agent";
import Message from "./message";

@Entity()
export default class Dispatch extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: Number;

  @Column({ type: "date" })
  timestamp: String;

  @Column({ nullable: true })
  agentId: number;

  @ManyToOne(() => Message)
  @JoinColumn()
  messageId: Number;

  @ManyToOne(() => Agent)
  @JoinColumn()
  agentID: number;
}

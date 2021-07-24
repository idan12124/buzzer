import {
  Entity,
  PrimaryGeneratedColumn,
  BaseEntity,
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

  @Column({ nullable: true })
  divisionId: number;

  @ManyToOne(() => Division)
  @JoinColumn({ name: "divisionId" })
  divisionID: Number;
}

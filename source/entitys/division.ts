import { Entity, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity()
export default class Division extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
}

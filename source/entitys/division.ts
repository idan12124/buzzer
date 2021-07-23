import { Entity, PrimaryGeneratedColumn, BaseEntity } from "typeorm";

@Entity("division")
export default class DvisionEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;
}

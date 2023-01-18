import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";

@Index("UNIQ_8D93D649E7927C74", ["email"], { unique: true })
@Entity("user", { schema: "db_node_show" })
export class User {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "email", unique: true, length: 180 })
  email: string;

  @Column("varchar", { name: "password", length: 255 })
  password: string;
}

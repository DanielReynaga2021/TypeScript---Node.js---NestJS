import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Movie } from "./Movie";
import { Tv } from "./Tv";

@Entity("director", { schema: "db_node_show" })
export class Director {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", nullable: true, length: 100 })
  name: string | null;

  @Column("varchar", { name: "last_name", nullable: true, length: 100 })
  lastName: string | null;

  @Column("date", { name: "date_birth", nullable: true })
  dateBirth: string | null;

  @Column("timestamp", {
    name: "created_at",
    nullable: true,
    default: () => "CURRENT_TIMESTAMP",
  })
  createdAt: Date | null;

  @Column("timestamp", { name: "updated_at", nullable: true })
  updatedAt: Date | null;

  @Column("timestamp", { name: "deleted_at", nullable: true })
  deletedAt: Date | null;

  @Column("tinyint", { name: "enabled", nullable: true, default: () => "'1'" })
  enabled: number | null;

  @OneToMany(() => Movie, (movie) => movie.director)
  movies: Movie[];

  @OneToMany(() => Tv, (tv) => tv.director)
  tvs: Tv[];
}

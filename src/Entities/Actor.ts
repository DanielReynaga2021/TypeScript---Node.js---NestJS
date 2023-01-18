import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Movie } from "./Movie";
import { Tv } from "./Tv";

@Entity("actor", { schema: "db_node_show" })
export class Actor {
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

  @ManyToMany(() => Movie, (movie) => movie.actors)
  @JoinTable({
    name: "ref_actor_movie",
    joinColumns: [{ name: "actor_id", referencedColumnName: "id" }],
    inverseJoinColumns: [{ name: "movie_id", referencedColumnName: "id" }],
    schema: "db_node_show",
  })
  movies: Movie[];

  @ManyToMany(() => Tv, (tv) => tv.actors)
  @JoinTable({
    name: "ref_actor_tv",
    joinColumns: [{ name: "actor_id", referencedColumnName: "id" }],
    inverseJoinColumns: [{ name: "tv_id", referencedColumnName: "id" }],
    schema: "db_node_show",
  })
  tvs: Tv[];
}

import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Director } from "./Director";
import { Actor } from "./Actor";
import { Genre } from "./Genre";

@Index("FK_movie", ["directorId"], {})
@Entity("movie", { schema: "db_node_show" })
export class Movie {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", nullable: true, length: 100 })
  name: string | null;

  @Column("date", { name: "release_date", nullable: true })
  releaseDate: string | null;

  @Column("int", { name: "director_id" })
  directorId: number;

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

  @ManyToOne(() => Director, (director) => director.movies, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "director_id", referencedColumnName: "id" }])
  director: Director;

  @ManyToMany(() => Actor, (actor) => actor.movies)
  actors: Actor[];

  @ManyToMany(() => Genre, (genre) => genre.movies)
  genres: Genre[];
}

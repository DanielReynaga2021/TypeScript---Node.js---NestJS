import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Actor } from "./Actor";
import { Genre } from "./Genre";
import { Season } from "./Season";
import { Director } from "./Director";

@Index("FK_tv_director", ["directorId"], {})
@Entity("tv", { schema: "db_node_show" })
export class Tv {
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

  @ManyToMany(() => Actor, (actor) => actor.tvs)
  actors: Actor[];

  @ManyToMany(() => Genre, (genre) => genre.tvs)
  genres: Genre[];

  @OneToMany(() => Season, (season) => season.tv)
  seasons: Season[];

  @ManyToOne(() => Director, (director) => director.tvs, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "director_id", referencedColumnName: "id" }])
  director: Director;
}

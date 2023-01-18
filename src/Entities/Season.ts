import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Episode } from "./Episode";
import { Tv } from "./Tv";

@Index("FK_season_tv", ["tvId"], {})
@Entity("season", { schema: "db_node_show" })
export class Season {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("int", { name: "number_season", nullable: true })
  numberSeason: number | null;

  @Column("date", { name: "release_date", nullable: true })
  releaseDate: string | null;

  @Column("int", { name: "tv_id" })
  tvId: number;

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

  @OneToMany(() => Episode, (episode) => episode.season)
  episodes: Episode[];

  @ManyToOne(() => Tv, (tv) => tv.seasons, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "tv_id", referencedColumnName: "id" }])
  tv: Tv;
}

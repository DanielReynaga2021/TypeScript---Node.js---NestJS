import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Season } from "./Season";

@Index("FK_episode_season", ["seasonId"], {})
@Entity("episode", { schema: "db_node_show" })
export class Episode {
  @PrimaryGeneratedColumn({ type: "int", name: "id" })
  id: number;

  @Column("varchar", { name: "name", nullable: true, length: 100 })
  name: string | null;

  @Column("int", { name: "number_episode", nullable: true })
  numberEpisode: number | null;

  @Column("date", { name: "release_date", nullable: true })
  releaseDate: string | null;

  @Column("int", { name: "season_id" })
  seasonId: number;

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

  @ManyToOne(() => Season, (season) => season.episodes, {
    onDelete: "NO ACTION",
    onUpdate: "NO ACTION",
  })
  @JoinColumn([{ name: "season_id", referencedColumnName: "id" }])
  season: Season;
}

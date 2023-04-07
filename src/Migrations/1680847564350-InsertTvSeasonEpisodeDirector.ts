import { MigrationInterface, QueryRunner } from "typeorm"

export class InsertTvSeasonEpisodeDirector1680847564350 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        /*Dragon's Blood*/
        await queryRunner.query(`INSERT INTO director (id, name, last_name, date_birth)
        VALUES (3,'Kim','Seong-hun','1973-11-28');`)
        await queryRunner.query(`INSERT INTO tv (id, name, release_date, director_id)
        VALUES (1,'Dota: Dragon''s Blood','2021-03-25',3);`)
        await queryRunner.query(`INSERT INTO season (id, number_season, release_date, tv_id)
        VALUES (1,1,'2021-03-25',1);`)
        await queryRunner.query(`INSERT INTO episode (id, name, number_episode,release_date, season_id)
        VALUES (1,'What the Thunder Said',1,'2021-03-25',1);`)
        await queryRunner.query(`INSERT INTO ref_tv_genre (tv_id, genre_id)
        VALUES (1,3);`)
        
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        /*Dragon's Blood*/
        await queryRunner.query(`DELETE FROM ref_tv_genre WHERE tv_id=1`)
        await queryRunner.query(`DELETE FROM episode WHERE name='What the Thunder Said'`)
        await queryRunner.query(`DELETE FROM season WHERE id=1`)
        await queryRunner.query(`DELETE FROM tv WHERE name='Dota: Dragon''s Blood'`)
        await queryRunner.query(`DELETE FROM director WHERE name='Kim' AND last_name='Seong-hun'`)
    }
}

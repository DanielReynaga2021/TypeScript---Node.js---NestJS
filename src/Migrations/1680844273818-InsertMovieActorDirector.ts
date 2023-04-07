import { MigrationInterface, QueryRunner } from "typeorm"

export class InsertMovieActorDirector1680844273818 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        /*Terminator*/
        await queryRunner.query(`INSERT INTO director (id, name, last_name, date_birth)
        VALUES (1,'James','Cameron','1954-08-16');`)
        await queryRunner.query(`INSERT INTO movie (id, name, release_date, director_id)
        VALUES (1,'Terminator','1984-10-26',1);`)
        await queryRunner.query(`INSERT INTO actor (id, name, last_name, date_birth)
        VALUES (1,'Arnold','Schwarzenegger','1947-07-30');`)
        await queryRunner.query(`INSERT INTO actor (id, name, last_name, date_birth)
        VALUES (2,'Linda','Hamilton', '1956-09-26');`)
        await queryRunner.query(`INSERT INTO actor (id, name, last_name, date_birth)
        VALUES (3,'Michael','Biehn','1956-07-31');`)
        await queryRunner.query(`INSERT INTO ref_actor_movie (movie_id, actor_id)
        VALUES (1,1);`)
        await queryRunner.query(`INSERT INTO ref_actor_movie (movie_id, actor_id)
        VALUES (1,2);`)
        await queryRunner.query(`INSERT INTO ref_actor_movie (movie_id, actor_id)
        VALUES (1,3);`)
        await queryRunner.query(`INSERT INTO ref_movie_genre (movie_id, genre_id)
        VALUES (1,14);`)

        /*Jurassic Park*/
        await queryRunner.query(`INSERT INTO director (id, name, last_name, date_birth)
        VALUES (2,'Steven','Spielberg','1946-12-18');`)
        await queryRunner.query(`INSERT INTO movie (id, name, release_date, director_id)
        VALUES (2,'Jurassic Park','1993-06-11',2);`)
        await queryRunner.query(`INSERT INTO actor (id, name, last_name, date_birth)
        VALUES (4,'Sam','Neill','1947-09-14');`)
        await queryRunner.query(`INSERT INTO actor (id, name, last_name, date_birth)
        VALUES (5,'Laura','Dern', '1967-02-10');`)
        await queryRunner.query(`INSERT INTO actor (id, name, last_name, date_birth)
        VALUES (6,'Jeff','Goldblum','1952-10-22');`)
        await queryRunner.query(`INSERT INTO ref_actor_movie (movie_id, actor_id)
        VALUES (1,4);`)
        await queryRunner.query(`INSERT INTO ref_actor_movie (movie_id, actor_id)
        VALUES (1,5);`)
        await queryRunner.query(`INSERT INTO ref_actor_movie (movie_id, actor_id)
        VALUES (1,6);`)
        await queryRunner.query(`INSERT INTO ref_movie_genre (movie_id, genre_id)
        VALUES (1,2);`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        /*Terminator*/
        await queryRunner.query(`DELETE FROM ref_movie_genre WHERE movie_id=1`)
        await queryRunner.query(`DELETE FROM ref_actor_movie WHERE movie_id=1`)
        await queryRunner.query(`DELETE FROM actor WHERE name='Arnold' AND last_name='Schwarzenegger'`)
        await queryRunner.query(`DELETE FROM actor WHERE name='Linda' AND last_name='Hamilton'`)
        await queryRunner.query(`DELETE FROM actor WHERE name='Michael' AND last_name='Biehn'`)
        await queryRunner.query(`DELETE FROM movie WHERE name='Terminator'`)
        await queryRunner.query(`DELETE FROM director WHERE name='James' AND last_name='Cameron'`)

        /*Jurassic Park*/
        await queryRunner.query(`DELETE FROM ref_movie_genre WHERE movie_id=2`)
        await queryRunner.query(`DELETE FROM ref_actor_movie WHERE movie_id=2`)
        await queryRunner.query(`DELETE FROM actor WHERE name='Sam' AND last_name='Neill'`)
        await queryRunner.query(`DELETE FROM actor WHERE name='Laura' AND last_name='Dern'`)
        await queryRunner.query(`DELETE FROM actor WHERE name='Jeff' AND last_name='Goldblum'`)
        await queryRunner.query(`DELETE FROM movie WHERE name='Jurassic Park'`)
        await queryRunner.query(`DELETE FROM director WHERE name='Steven' AND last_name='Spielberg'`)
    }

}

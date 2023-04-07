import { MigrationInterface, QueryRunner } from "typeorm"

export class InsertGenre1680844219479 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`INSERT INTO genre (id, name) VALUES (1,'Action');`)
        await queryRunner.query(`INSERT INTO genre (id, name) VALUES (2,'Adventure');`)
        await queryRunner.query(`INSERT INTO genre (id, name) VALUES (3,'Animation');`)
        await queryRunner.query(`INSERT INTO genre (id, name) VALUES (4,'Comedy');`)
        await queryRunner.query(`INSERT INTO genre (id, name) VALUES (5,'Crime');`)
        await queryRunner.query(`INSERT INTO genre (id, name) VALUES (6,'Documentary');`)
        await queryRunner.query(`INSERT INTO genre (id, name) VALUES (7,'Drama');`)
        await queryRunner.query(`INSERT INTO genre (id, name) VALUES (8,'Family');`)
        await queryRunner.query(`INSERT INTO genre (id, name) VALUES (9,'Fantasy');`)
        await queryRunner.query(`INSERT INTO genre (id, name) VALUES (10,'Horror');`)
        await queryRunner.query(`INSERT INTO genre (id, name) VALUES (11,'Musical');`)
        await queryRunner.query(`INSERT INTO genre (id, name) VALUES (12,'Mystery');`)
        await queryRunner.query(`INSERT INTO genre (id, name) VALUES (13,'Romance');`)
        await queryRunner.query(`INSERT INTO genre (id, name) VALUES (14,'Science Fiction');`)
        await queryRunner.query(`INSERT INTO genre (id, name) VALUES (15,'Sports');`)
        await queryRunner.query(`INSERT INTO genre (id, name) VALUES (16,'Suspense');`)
        await queryRunner.query(`INSERT INTO genre (id, name) VALUES (17,'Thriller');`)
        await queryRunner.query(`INSERT INTO genre (id, name) VALUES (18,'War');`)
        await queryRunner.query(`INSERT INTO genre (id, name) VALUES (19,'Western');`)
        await queryRunner.query(`INSERT INTO genre (id, name) VALUES (20,'Historical');`)
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DELETE FROM genre WHERE name='Action';`)
        await queryRunner.query(`DELETE FROM genre WHERE name='Adventure';`)
        await queryRunner.query(`DELETE FROM genre WHERE name='Animation';`)
        await queryRunner.query(`DELETE FROM genre WHERE name='Comedy';`)
        await queryRunner.query(`DELETE FROM genre WHERE name='Crime';`)
        await queryRunner.query(`DELETE FROM genre WHERE name='Documentary';`)
        await queryRunner.query(`DELETE FROM genre WHERE name='Drama';`)
        await queryRunner.query(`DELETE FROM genre WHERE name='Family';`)
        await queryRunner.query(`DELETE FROM genre WHERE name='Fantasy';`)
        await queryRunner.query(`DELETE FROM genre WHERE name='Horror';`)
        await queryRunner.query(`DELETE FROM genre WHERE name='Musical';`)
        await queryRunner.query(`DELETE FROM genre WHERE name='Mystery';`)
        await queryRunner.query(`DELETE FROM genre WHERE name='Romance';`)
        await queryRunner.query(`DELETE FROM genre WHERE name='Science Fiction';`)
        await queryRunner.query(`DELETE FROM genre WHERE name='Sports';`)
        await queryRunner.query(`DELETE FROM genre WHERE name='Suspense';`)
        await queryRunner.query(`DELETE FROM genre WHERE name='Thriller';`)
        await queryRunner.query(`DELETE FROM genre WHERE name='War';`)
        await queryRunner.query(`DELETE FROM genre WHERE name='Western';`)
        await queryRunner.query(`DELETE FROM genre WHERE name='Historical';`)
    }

}

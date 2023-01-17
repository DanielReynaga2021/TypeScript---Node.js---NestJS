import { MigrationInterface, QueryRunner } from "typeorm"

export class CreateTableUser1673926818917 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE user (
            id INT AUTO_INCREMENT NOT NULL, 
            email VARCHAR(180) NOT NULL, 
            password VARCHAR(255) NOT NULL, 
            UNIQUE INDEX UNIQ_8D93D649E7927C74 (email), PRIMARY KEY(id)) 
            DEFAULT CHARACTER SET utf8 
            COLLATE "utf8_unicode_ci" 
            ENGINE = InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {

        await queryRunner.query('DROP TABLE user');
    }
}

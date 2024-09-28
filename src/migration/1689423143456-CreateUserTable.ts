import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUserTable1689423143456 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user',
        columns: [
          {
            name: 'UserID',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'Name',
            type: 'varchar',
            length: '255',
          },
          {
            name: 'Email',
            type: 'varchar',
            length: '255',
            isUnique: true,
          },
          {
            name: 'Password',
            type: 'varchar',
            length: '255',
          },
          {
            name: 'DOB',
            type: 'date',
          },
          {
            name: 'NationalID',
            type: 'varchar',
            length: '50',
          },
          {
            name: 'ProfilePicture',
            type: 'varchar',
            length: '255',
            isNullable: true,
          },
          {
            name: 'UserType',
            type: 'enum',
            enum: ['Patient', 'Agent', 'Supervisor', 'Doctor'],
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('user');
  }
}

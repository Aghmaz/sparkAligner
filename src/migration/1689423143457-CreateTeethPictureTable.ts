import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateTeethPictureTable1689423143457 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'teeth_picture',
        columns: [
          {
            name: 'PictureID',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: 'UserID',
            type: 'int',
          },
          {
            name: 'UploadDate',
            type: 'datetime',
          },
          {
            name: 'FilePath',
            type: 'varchar',
            length: '255',
          },
          {
            name: 'Status',
            type: 'enum',
            enum: ['Uploaded', 'Deleted'],
          },
        ],
      })
    );

    await queryRunner.createForeignKey(
      'teeth_picture',
      new TableForeignKey({
        columnNames: ['UserID'],
        referencedColumnNames: ['UserID'],
        referencedTableName: 'user',
        onDelete: 'CASCADE',
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('teeth_picture');
  }
}

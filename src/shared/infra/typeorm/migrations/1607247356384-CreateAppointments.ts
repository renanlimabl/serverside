import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateAppointments1607247356384
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'appointments',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'provider',
            type: 'varchar',
          },
          {
            name: 'date',
            type: 'timestamp with time zone',
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('appointments');
  }
}

/**
 * Linha do tempo
 * 1ª semanha = Agendamentos
 * 2ª semana = Usuários
 * 3ª novo dev, na tabela de agendamentos tinha problema, então fez uma edição
 * na tabela de Agendamentos.
 * 4ª semana: Compras
 *
 * Então as migrations evita que muitos devs estejam com bd diferentes,
 * e que estejam com um versionamento igual.
 */

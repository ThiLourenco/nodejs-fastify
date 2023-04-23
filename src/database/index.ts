import { Knex, knex as setupKnex } from 'knex'

export const config: Knex.Config = {
  client: 'oracledb',
  connection: {
    host: process.env.ORACLE_HOST,
    port: process.env.ORACLE_PORT,
    user: process.env.ORACLE_USER,
    password: process.env.ORACLE_PASSWORD,
    database: process.env.ORACLE_DATABASE,
  },
  migrations: {
    extension: 'ts',
    directory: './src/database/migrations',
  },
}

export const knex = setupKnex(config)

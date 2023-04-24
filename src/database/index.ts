import { Knex, knex as setupKnex } from 'knex'
import * as dotenv from 'dotenv'
dotenv.config()

export const config: Knex.Config = {
  client: 'oracledb',
  connection: {
    user: process.env.ORACLE_USER,
    password: process.env.ORACLE_PASS,
    connectString: process.env.ORACLE_CONNECTION,
  },
}

export const knex = setupKnex(config)

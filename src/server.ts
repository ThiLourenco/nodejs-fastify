import fastify from 'fastify'
import { knex } from './database'

const app = fastify()

// create route
app.get('/hello', async () => {
  const result = await knex.select('*').from('help')

  return result
})

// list port
app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log(`Http server running`)
  })

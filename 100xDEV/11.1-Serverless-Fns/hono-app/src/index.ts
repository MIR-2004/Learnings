import { Hono } from 'hono'

const app = new Hono()

app.get('/', async (c) => {
  const body = await c.req.json()
  console.log(body);
  console.log(c.req.header("Authorization"))
  console.log(c.req.param)
  return c.json({
    message: `Hi ${body.name}`
  })
})


export default app

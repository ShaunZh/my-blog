import * as Koa from 'koa'
import * as Router from 'koa-router'

const app = new Koa()

// logger

app.use(async (ctx, next) => {
  console.log('1')
  await next()
  const rt = ctx.response.get('X-Response-Time')
  console.log(`${ctx.method} ${ctx.url} - ${rt}`)
  console.log('5')
})

// x-response-time

app.use(async (ctx, next) => {
  const start = Date.now()
  console.log('2')
  await next()
  console.log('4')
  const ms = Date.now() - start
  ctx.set('X-Response-Time', `${ms}ms`)
})

// response

app.use(async (ctx) => {
  console.log('3')
  ctx.body = 'Hello World'
})

app.listen(3000)

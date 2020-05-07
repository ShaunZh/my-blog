import * as Koa from 'koa'
import * as Router from 'koa-router'

import { ServiceContainer } from '../container'

export function init(server: Koa, container: ServiceContainer) {
  const router = new Router({ prefix: '/api/v1/tags' })
  const container = new UserController(container.managers.tag)
}

import { ErrorCallback, retry } from 'async'
import { Server } from 'http'
import * as Koa from 'koa'
import * as helmet from 'koa-helmet'
import { AppError } from '../errors'
import * as middlewares from './middlewares'
import { ServiceContainer } from './container'

export class AppServer {
  private app: Koa
  private server: Server

  public constructor(app: Koa) {
    this.app = app
  }

  public listen(port: number): Server {
    this.server = this.app.listen(port)
    return this.server
  }

  public getServer(): Server {
    return this.server
  }

  public closeServer(): Promise<void> {
    if (this.server === undefined) {
      throw new AppError(10001, 'Server is not initialized')
    }

    const checkPendingRequests = (callback: ErrorCallback<Error | undefined>) => {
      this.server.getConnections((err: Error | null, pendingRequests: number) => {
        if (err) {
          callback(err)
        } else if (pendingRequests > 0) {
          callback(Error(`Number of pending requests: ${pendingRequests}`))
        } else {
          callback(undefined)
        }
      })
    }

    return new Promise<void>((resolve, reject) => {
      retry(
        {
          times: 10,
          interval: 1000
        },
        checkPendingRequests.bind(this),
        (error: Error | undefined | null) => {
          if (error) {
            this.server.close(() => reject(error))
          } else {
            this.server.close(() => resolve())
          }
        }
      )
    })
  }
}

export function createServer(container: ServiceContainer): AppServer {
  const app = new Koa()
  const appSrv = new AppServer(app)

  app.use(helmet())
  app.use(middlewares.errorHandler(container.logger))

  return appSrv
}

import { Logger } from 'pino'
import { MySql } from '../lib/database'
import { TagRepository } from '../repositories'
import { TagManager } from '../managers'

export interface ServiceContainer {
  logger: Logger
  repositories: {
    tag: TagRepository
  }
  managers: {
    tag: TagManager
  }
}

export function createContainer(db: MySql, logger: Logger): ServiceContainer {
  const tagRepo = new TagRepository(db)
  return {
    logger,
    repositories: {
      tag: tagRepo
    },
    managers: {
      tag: new TagManager(tagRepo)
    }
  }
}

import { Tag } from '../entities'
import { ValidationError } from '../errors'

import { MySql } from '../lib/database/'

export class TagRepository {
  private readonly TABLE: string = 'tag'
  private db: MySql

  public constructor(db: MySql) {
    this.db = db
  }

  public async insert(tag: Tag): Promise<Tag> {
    tag.create_time = new Date()

    const conn = await this.db.getConnection()

    try {
      const result = await conn.table(this.TABLE).insert({
        name: tag.name,
        create_time: tag.create_time,
        update_time: tag.update_time
      })
      tag.id = result[0]
      console.log('tag insert id: ', tag.id)
      return tag
    } catch (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        throw new ValidationError(`Tag Name <${tag.name}> already exists`, err)
      }
      throw err
    }
  }
}

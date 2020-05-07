import { Tag } from '../entities'
import { TagRepository } from '../repositories'

export class TagManager {
  private repo: TagRepository

  public constructor(repo: TagRepository) {
    this.repo = repo
  }

  public async create(tag: Tag): Promise<Tag> {
    return this.repo.insert(tag)
  }
}

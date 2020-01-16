export enum PostListActionType {
  FETCH_REQUEST = '@post/FETCH_REQUEST',
  FETCH_SUCCESS = '@post/FETCH_SUCCESS',
  FETCH_FAILURE = '@post/FETCH_FAILURE'
}

export enum TagListActionType {
  TAG_FETCH_REQUEST = '@post/TAG_FETCH_REQUEST',
  TAG_FETCH_SUCCESS = '@post/TAG_FETCH_SUCCESS',
  TAG_FETCH_FAILURE = '@post/TAG_FETCH_FAILURE'
}

export interface IPostList {
  type: string
  size: number
}

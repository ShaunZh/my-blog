import { createAsyncAction } from 'typesafe-actions'

import { PostListActionType, IPostList, TagListActionType } from './types'

// 请求文章列表action
export const postListAction = createAsyncAction(
  PostListActionType.FETCH_REQUEST,
  PostListActionType.FETCH_SUCCESS,
  PostListActionType.FETCH_FAILURE
)<IPostList, object, string>()

// 请求tag列表action
export const tagListAction = createAsyncAction(
  TagListActionType.TAG_FETCH_REQUEST,
  TagListActionType.TAG_FETCH_SUCCESS,
  TagListActionType.TAG_FETCH_FAILURE
)<undefined, object, string>()

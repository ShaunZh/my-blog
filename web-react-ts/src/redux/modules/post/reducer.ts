import { combineReducers } from 'redux'
import { createReducer, action } from 'typesafe-actions'

import { PostListActionType, TagListActionType } from './types'
import { postListAction, tagListAction } from './action'
import { StateObservable } from 'redux-observable'

export const postStatus = createReducer('')
  .handleAction(postListAction.request, () => PostListActionType.FETCH_REQUEST)
  .handleAction(postListAction.success, () => PostListActionType.FETCH_SUCCESS)
  .handleAction(postListAction.failure, () => PostListActionType.FETCH_FAILURE)

export const tagStatus = createReducer('')
  .handleAction(tagListAction.request, () => TagListActionType.TAG_FETCH_REQUEST)
  .handleAction(tagListAction.success, () => TagListActionType.TAG_FETCH_SUCCESS)
  .handleAction(tagListAction.failure, () => TagListActionType.TAG_FETCH_FAILURE)

export const postList = createReducer([
  {
    number: '12346',
    title: '第一篇文章',
    time: '2020-01-01'
  },
  {
    number: '1234',
    title: '第一篇文章',
    time: '2020-01-01'
  },
  {
    number: '1236',
    title: '第一篇文章',
    time: '2020-01-01'
  },
  {
    number: '1346',
    title: '第一篇文章',
    time: '2020-01-01'
  }
] as IPostItem[]).handleAction(postListAction.success, (state, action) => ({
  ...state,
  postList: action.payload
}))

export const tagList = createReducer([
  {
    number: '123456',
    title: '第一个标签',
    postSum: 102 // 文章数量
  },
  {
    number: '12356',
    title: '第一个标签',
    postSum: 102 // 文章数量
  },
  {
    number: '12345',
    title: '第一个标签',
    postSum: 102 // 文章数量
  },
  {
    number: '13456',
    title: '第一个标签',
    postSum: 102 // 文章数量
  },
  {
    number: '12456',
    title: '第一个标签',
    postSum: 102 // 文章数量
  }
] as ITagItem[]).handleAction(tagListAction.success, (state, action) => ({ ...state, tagList: action.payload }))

const postReducer = combineReducers({ postStatus, postList, tagStatus, tagList })

export default postReducer
export type PostState = ReturnType<typeof postReducer>

import * as React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { Link } from 'react-router-dom'

import { RootState } from 'typesafe-actions'
import { TagListActionType } from '@/redux/modules/post/types'

import './index.scss'

const mapState = (state: RootState) => ({
  status: state.post.tagStatus,
  tagList: state.post.tagList
})

const connector = connect(mapState)

type PropsFromRedux = ConnectedProps<typeof connector>

const TagList: React.FC<PropsFromRedux> = (props) => {
  const loading = () => <p>loading</p>
  const li = () =>
    props.tagList.map((item) => {
      return (
        <li key={item.number} className="m-item f-single-line-hidden">
          <Link to={`/tag?${item.number}`} className="u-title ">
            {item.title}
          </Link>
          <span className="u-sum">（ {item.postSum} ）</span>
        </li>
      )
    })
  return (
    <div className="m-tag">
      <h4 className="u-header">分类</h4>
      <ul className="m-tag-list">{props.status === TagListActionType.TAG_FETCH_REQUEST ? loading() : li()}</ul>
    </div>
  )
}

export default connector(TagList)

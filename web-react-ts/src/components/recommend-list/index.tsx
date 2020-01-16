import * as React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { Link } from 'react-router-dom'

import { RootState } from 'typesafe-actions'
import { PostListActionType } from '@/redux/modules/post/types'

import './index.scss'

const mapState = (state: RootState) => ({
  status: state.post.postStatus,
  recommendList: state.post.postList
})

const connector = connect(mapState)

type PropsFromRedux = ConnectedProps<typeof connector>

const RecommendList: React.FC<PropsFromRedux> = (props) => {
  const loading = () => <p>loading</p>
  const li = () =>
    props.recommendList.map((item, index) => {
      return (
        <li key={item.number} className="m-item f-single-line-hidden">
          <span>{index + 1}. </span>
          <Link to={`/post?${item.number}`} className="u-title ">
            {item.title}
          </Link>
        </li>
      )
    })
  return <ul className="m-recommend-list">{props.status === PostListActionType.FETCH_REQUEST ? loading() : li()}</ul>
}

export default connector(RecommendList)

/*
 * @Description: 主要布局组件
 * @Author: Hexon
 * @Date: 2019-10-28 17:26:29
 * @LastEditors  : Hexon
 * @LastEditTime : 2020-01-16 16:31:35
 */

import * as React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from 'typesafe-actions'
import './styles/main-layout.scss'

import { authAsync } from '@/redux/modules/auth/action'
import RecommendList from '@/components/recommend-list'
import TagList from '@/components/tag-list'

const mapState = (state: RootState) => ({
  role: state.user.role,
  authStatus: state.auth.status,
  curTab: state.common.menu
})

const mapDispatch = {}

const connector = connect(mapState, mapDispatch)
interface PropsParent {
  children: React.ReactNode // 子组件
}

type PropsFromRedux = ConnectedProps<typeof connector>

type Props = PropsParent & PropsFromRedux

class MainLayout extends React.Component<Props> {
  public componentDidUpdate() {
    console.log('main-layout: update')
  }

  public componentDidMount() {
    console.log('main-layout: mount')
  }

  public render() {
    console.log('main-layout: render')
    return (
      <div className="main-container f-clearfix">
        <div className="g-main">{this.props.children}</div>
        <div className="g-aside f-tal">
          <RecommendList />
          <TagList />
        </div>
      </div>
    )
  }
}

export default connector(MainLayout)

import * as React from 'react'
import { Link } from 'react-router-dom'
import PostList from './components/post-list'
import './styles/index.scss'

interface IState {
  // 最新文章列表6条
  // 推荐文章列表：10条
  // 标签列表
  // 最新文章
  latestPostList: IPostItem[]
}

class Home extends React.Component<{}, IState> {
  public state: IState = {
    latestPostList: [
      {
        title: '第一篇文章',
        time: '2020-01-01',
        number: '123455'
      },
      {
        title: '第一篇文章',
        time: '2020-01-01',
        number: '1234555'
      }
    ]
  }
  public componentDidMount() {}
  public render() {
    return (
      <div className="g-home">
        <div className="m-latest f-tal">
          <h3 className="u-header">最新文章标题</h3>
          <div className="m-body">
            <div className="m-cate f-tar">
              <span className="uf-cs">分类: </span>
              <Link to="/tag?123456" className="item">
                分类名称
              </Link>
            </div>
            <p className="u-intro">文章简介</p>
            <Link to="/post?123456" className="u-more">
              继续阅读全文 <span className="arrow">»</span>
            </Link>
          </div>
          <div className="m-footer">
            <span className="u-date">2020年1月14日 12:59</span>
            <span className="u-separator">|</span>
            <span className="message">留言（2）</span>
          </div>
        </div>
        <div className="m-post-list f-tal">
          <h4 className="u-header">最新文章</h4>
          <PostList list={this.state.latestPostList} />
        </div>
      </div>
    )
  }
}

export default Home

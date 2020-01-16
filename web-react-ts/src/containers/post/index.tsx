import * as React from 'react'
import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import './styles/index.scss'
import AssetFooter from '@/components/asset-footer'

class Post extends React.Component {
  public componentDidMount() {}
  public render() {
    const input = '# This is a header\n\nAnd this is a paragraph'
    const tagNumber = '12456'
    return (
      <div className="g-post">
        <h3 className="u-header">文章标题</h3>
        <div className="m-info">
          <p className="u-tag u-item">
            分类：
            <Link to={`/tag?${tagNumber}`} className="u-link">
              分类
            </Link>
          </p>
          <p className="u-date u-item">日期：2020-01-16</p>
        </div>
        <div className="m-content f-tal">
          <ReactMarkdown source={input} />
        </div>
        <div className="m-footer">
          <AssetFooter postDate="2020-01-16" />
        </div>
      </div>
    )
  }
}
export default Post

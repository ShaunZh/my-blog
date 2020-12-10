import * as React from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import Layout from '../components/Layout';
import AssetFooter from '../components/AssetFooter';

class Post extends React.Component {
  public componentDidMount() {}

  public render() {
    const input = '# This is a header\n\nAnd this is a paragraph';
    const tagNumber = '12456';
    return (
      <Layout title="标签">
        <div className="g-post">
          <h3 className="u-header">文章标题</h3>
          <div className="m-info">
            <p className="u-tag u-item">
              分类：
              <Link href={`/tag?${tagNumber}`}>
                <a className="u-link">分类</a>
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
          <style jsx>
            {`
              .g-post {
                padding: 20px 0;
                text-align: left;
              }
              .u-header {
                border-bottom: 1px solid #d3d3d3;
                padding-bottom: 10px;
                font-size: 29px;
                line-height: 52px;
                font-weight: 400;
                text-align: left;
              }
              .m-info {
                padding: 16px 10px;
                border-bottom: 1px solid #d3d3d3;
                font-size: 16px;
                color: #567;
              }
              .u-item:not(:first-child) {
                margin-top: 16px;
              }
              .u-tag .u-link {
                color: #ffa500;
              }
            `}
          </style>
        </div>
      </Layout>
    );
  }
}
export default Post;

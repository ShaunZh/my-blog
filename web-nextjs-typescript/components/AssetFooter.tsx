import * as React from 'react';

interface IProps {
  postDate: string;
}
const AssetFooter = (props: IProps) => {
  return (
    <div className="asset-footer">
      <h3 className="title">文档信息</h3>
      <ul className="list-wrap">
        <li className="item">
          版权声明：自由转载-非商用-非衍生-保持署名
          <span className="u-line">|</span>
          <a
            className="u-license"
            href="http://creativecommons.org/licenses/by-nc-nd/3.0/deed.zh"
          >
            Creative Commons BY-NC 3.0 CN{' '}
          </a>
        </li>
        <li className="item">
          发表日期：{' '}
          <abbr className="u-published" title={props.postDate}>
            {props.postDate}
          </abbr>
        </li>
      </ul>
      <style jsx>{`
        .asset-footer {
          margin-top: 20px;
          padding: 15px;
          border: 1px solid #d3d3d3;
          border-radius: 1em;
          font-weight: bold;
          box-shadow: inset 0px 1px 0px 0px #eee;
          text-shadow: 1px 1px 0px #eee;
          color: #fcb297;
          background-color: #deebf7;
          background: -webkit-gradient(
            linear,
            left top,
            left bottom,
            color-stop(0.05, #aad2f0),
            color-stop(1, #8bc1ed)
          );
        }
        .title {
          margin: 7px 0 4px;
          padding: 0 0 4px;
          border-bottom: 1px solid gray;
          font-size: 19.2px;
          font-weight: normal;
          color: #567;
        }
        .list-wrap {
          margin: 0;
          padding-left: 20px;
          padding-right: 20px;
          color: #567;
        }
        .list-wrap .item {
          font-size: 16px;
          line-height: 2.2;
          list-style-type: square;
          font-weight: normal;
        }
        .list-wrap .item .u-line {
          margin: 0 10px;
        }
        .list-wrap .item .u-license {
          color: #567;
          font-weight: normal;
        }
        .u-published {
          color: #3d3d3d;
          text-decoration: none;
        }
        .u-published[title] {
          text-decoration: none;
        }
      `}</style>
    </div>
  );
};

export default AssetFooter;

import * as React from "react";
import Link from "next/link";
import { IPostItem } from "../interfaces";

interface IProps {
  year: string;
  postList: IPostItem[];
}
const PostList: React.FC<IProps> = props => {
  const li = () =>
    props.postList.map(item => {
      return (
        <li key={item.number} className="m-item f-single-line-hidden f-tal">
          <Link href={`/post?${item.number}`}>
            <a className="u-title "> {item.title}</a>
          </Link>
          <span className="u-sum">（ {item.time} ）</span>
        </li>
      );
    });
  return (
    <div className="m-post-list-item">
      <h4 className="u-header">{props.year}</h4>
      <ul className="m-tag-list">{li()}</ul>
      <style jsx>{`
        .m-post-list-item {
          margin: 24px 0;
          border-radius: 16px;
        }
        .m-tag-list {
          padding: 16px;
          font-size: 14.4px;
          color: #111;
        }
        .u-header {
          border-bottom: 1px solid #d3d3d3;
          margin: 16px 16px 0;
          padding-bottom: 4px;
          font-size: 18px;
          font-weight: normal;
        }
        .m-item {
          margin-bottom: 16px;
          list-style: square inside;
        }
        .m-item .u-title:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
};

export default PostList;

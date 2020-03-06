import * as React from "react";
import Link from "next/link";
import { IPostItem } from "../interfaces";

interface IProps {
  list: IPostItem[];
}

const PostList = (props: IProps) => {
  const { list = [] } = props;
  return (
    <ul className="list-wrap">
      {list.map(item => {
        return (
          <li key={item.number} className="item">
            <span className="u-time uf-cs">{item.time}</span>
            <span className="u-ay uf-cs"> » </span>
            <Link href={`/post?${item.number}`}>
              <span className="u-title f-csp">{item.title}</span>
            </Link>
          </li>
        );
      })}
      <style jsx>{`
        .list-wrap {
          padding-left: 32px;
        }
        .item {
          vertical-align: middle;
          text-align: left;
          list-style: square;
          line-height: 35px;
          font-weight: normal;
          font-size: 14px;
          color: rgba(0, 0, 0, 0.5);
        }
        .u-title {
          color: #556677;
        }
        .u-title:hover {
          color: #654;
        }
      `}</style>
    </ul>
  );
};

export default PostList;

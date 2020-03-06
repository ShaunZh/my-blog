import * as React from "react";
import Link from "next/link";

const TagList: React.FC = () => {
  const status = "loading";
  const loading = () => <p>loading</p>;
  const tagList = [
    {
      number: "111",
      postSum: 4444,
      title: "tag1"
    },
    {
      number: "1122",
      postSum: 4444,
      title: "tag2"
    }
  ];
  const li = () =>
    tagList.map(item => {
      return (
        <li key={item.number} className="m-item f-single-line-hidden">
          <Link href={`/tag?${item.number}`}>
            <a className="u-title">{item.title}</a>
          </Link>
          <span className="u-sum">（ {item.postSum} ）</span>
        </li>
      );
    });
  return (
    <div className="m-tag">
      <h4 className="u-header">分类</h4>
      <ul className="m-tag-list">{status === "loading" ? loading() : li()}</ul>
      <style jsx>
        {`
          .m-tag {
            margin: 32px 0;
            border-radius: 16px;
            border: 1px solid #d3d3d3;
          }
          .u-header {
            border-bottom: 1px solid #d3d3d3;
            margin: 16px 16px 0;
            padding-bottom: 4px;
            font-size: 18px;
            font-weight: normal;
          }
          .m-tag-list {
            padding: 16px;
            font-size: 14.4px;
            color: #111;
          }
          .m-item {
            margin-bottom: 16px;
            list-style: square inside;
          }
          .u-title:hover {
            text-decoration: underline;
          }
        `}
      </style>
    </div>
  );
};

export default TagList;

import * as React from "react";
import Link from "next/link";

interface IProps {
  recommendList: [];
}

const RecommendList: React.FC<IProps> = props => {
  const status = false;
  const { recommendList = [] } = props;
  const loading = () => <p>loading</p>;
  const li = () =>
    recommendList.map((item: any, index: number) => {
      return (
        <li key={item.number} className="m-item f-single-line-hidden">
          <span>{index + 1}. </span>
          <Link href={`/post?${item.number}`}>
            <a className="u-title" />
            {item.title}
          </Link>
        </li>
      );
    });
  return (
    <ul className="m-recommend-list">
      {status ? loading() : li()}
      <style jsx>{`
        .m-recommend-list {
          margin: 32px 0;
          padding: 16px;
          border-radius: 16px;
          border: 1px solid #d3d3d3;
        }
        .m-item {
          margin-bottom: 16px;
        }
        .u-title:hover {
          text-decoration: underline;
        }
      `}</style>
    </ul>
  );
};

export default RecommendList;

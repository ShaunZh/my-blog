import * as React from "react";
import Link from "next/link";
import { NextPage } from "next";

import PostList from "../components/PostList";

const IndexPage: NextPage = () => {
  const latestPostList = [
    {
      title: "第一篇文章",
      time: "2020-01-01",
      number: "123455"
    },
    {
      title: "第一篇文章",
      time: "2020-01-01",
      number: "1234555"
    }
  ];
  return (
    <div className="g-home">
      <div className="m-latest f-tal">
        <h3 className="u-header">最新文章标题</h3>
        <div className="m-body">
          <div className="m-cate f-tar">
            <span className="uf-cs">分类: </span>
            <Link href="/tag?123456">
              <a className="item">分类名称</a>
            </Link>
          </div>
          <p className="u-intro">文章简介</p>
          <Link href="/post?123456">
            <a className="u-more">
              继续阅读全文 <span className="arrow">»</span>
            </a>
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
        <PostList list={latestPostList} />
      </div>
      <style jsx>
        {`
          .m-latest {
            margin-bottom: 44px;
          }
          .m-latest .u-header {
            font-size: 29px;
            line-height: 52px;
            font-weight: 400;
            border-bottom: 1px solid #d3d3d3;
          }
          .m-latest .m-body {
            margin-bottom: 10px;
            padding-left: 16px;
            border-bottom: 1px solid #d3d3d3;
          }

          .m-latest .m-body .m-cate {
            margin-right: 16px;
            font-size: 16px;
            line-height: 35.2px;
          }
          .m-latest .m-body .m-cate .item {
            color: #ffa500;
          }
          .m-latest .m-body .u-intro {
            margin-bottom: 16px;
            font-size: 18px;
            color: #111;
          }
          .m-latest .m-body .u-more {
            font-size: 16px;
            line-height: 35.2px;
            color: #008000;
          }
          .m-latest .m-footer {
            padding-left: 16px;
            color: #3d3d3d;
            font-size: 12px;
          }
          .m-latest .u-date {
            font-style: italic;
          }
          .m-latest .u-separator {
            padding: 0 10px;
          }
          .m-post-list .u-header {
            font-size: 24px;
            font-weight: 400;
            padding-bottom: 8px;
            border-bottom: 1px solid #d3d3d3;
          }
        `}
      </style>
    </div>
  );
};

export default IndexPage;

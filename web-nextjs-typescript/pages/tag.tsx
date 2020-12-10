import * as React from 'react';

import PostListItem from '../components/PostListItem';

class Tag extends React.Component {
  public render() {
    const yearPostList = [
      {
        year: '2019年',
        postList: [
          {
            title: '第一篇文章',
            time: '2019-01-02',
            number: '124566',
          },
          {
            title: '第二篇文章',
            time: '2019-01-02',
            number: '24566',
          },
        ],
      },
      {
        year: '2018年',
        postList: [
          {
            title: '第一篇文章',
            time: '2019-01-02',
            number: '12466',
          },
          {
            title: '第二篇文章',
            time: '2019-01-02',
            number: '2566',
          },
        ],
      },
    ];
    return (
      <div className="g-tag">
        <h4 id="page-title" className="archive-title">
          分类：分类名称（共193篇文章）
        </h4>
        {yearPostList.map((yearPost, index) => {
          return <PostListItem key={index} {...yearPost} />;
        })}
        <style jsx>{`
          .archive-title {
            margin: 32px 0;
            padding: 10px;
            text-align: left;
            font-size: 16px;
            font-weight: normal;
            color: #567;
            border-bottom: none;
            background-color: #aad2f0;
            border-radius: 10px;
          }
        `}</style>
      </div>
    );
  }
}

export default Tag;

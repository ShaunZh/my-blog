import * as React from 'react';
import Head from 'next/head';

import TagList from './TagList';
import RecommendList from './Recommend';

interface Props {
  title?: string;
}

const Layout: React.FunctionComponent<Props> = ({
  children,
  title = 'This is the default title',
}) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="main-container f-clearfix">
      <div className="g-main">{children}</div>
      <div className="g-aside f-tal">
        <RecommendList recommendList={[]} />
        <TagList />
      </div>
    </div>
    <style jsx>
      {`
        .main-container {
          padding: 0 100px;
          display: flex;
          justify-content: space-between;
        }
        .g-main {
          margin-right: 30px;
          flex-grow: 2;
        }
        .g-aside {
          padding: 10p;
          width: 258px;
        }
      `}
    </style>
  </div>
);

export default Layout;

import * as React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

interface IProps {
  year: string
  postList: IPostItem[]
}

const Div = styled.div`
  margin: 24px 0;
  border-radius: 16px;
`
const H4 = styled.h4`
  border-bottom: 1px solid #d3d3d3;
  margin: 16px 16px 0;
  padding-bottom: 4px;
  font-size: 18px;
  font-weight: normal;
`

const Ul = styled.ul`
  padding: 16px;
  font-size: 14.4px;
  color: #111;
`

const Li = styled.li`
  margin-bottom: 16px;
  list-style: square inside;
  .u-title:hover {
    text-decoration: underline;
  }
`

const PostList: React.FC<IProps> = (props) => {
  const loading = () => <p>loading</p>
  const li = () =>
    props.postList.map((item) => {
      return (
        <Li key={item.number} className="m-item f-single-line-hidden f-tal">
          <Link to={`/post?${item.number}`} className="u-title ">
            {item.title}
          </Link>
          <span className="u-sum">（ {item.time} ）</span>
        </Li>
      )
    })
  return (
    <Div className="m-post-list-item">
      <H4 className="u-header">{props.year}</H4>
      <Ul className="m-tag-list">{li()}</Ul>
    </Div>
  )
}

export default PostList

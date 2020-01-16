import * as React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

interface IProps {
  list: IPostItem[]
}

const Ul = styled.ul`
  padding-left: 32px;
`

const Li = styled.li`
  vertical-align: middle;
  text-align: left;
  list-style: square;
  line-height: 35px;
  font-weight: normal;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.5);
`

const Title = styled.span`
  color: #556677;
  &:hover {
    color: #654;
  }
`

const PostList = (props: IProps) => {
  const { list = [] } = props
  return (
    <Ul>
      {list.map((item) => {
        return (
          <Li key={item.number}>
            <span className="u-time uf-cs">{item.time}</span>
            <span className="u-ay uf-cs"> » </span>
            <Link to={`/post?${item.number}`}>
              <Title className="u-title f-csp">{item.title}</Title>
            </Link>
          </Li>
        )
      })}
    </Ul>
  )
}

export default PostList

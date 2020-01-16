import * as React from 'react'

import styled from 'styled-components'

interface IProps {
  postDate: string
}

const Div = styled.div`
  margin-top: 20px;
  padding: 15px;
  border: 1px solid #d3d3d3;
  border-radius: 1em;
  font-weight: bold;
  box-shadow: inset 0px 1px 0px 0px #eee;
  text-shadow: 1px 1px 0px #eee;
  color: #fcb297;
  background-color: #deebf7;
  background: -webkit-gradient(linear, left top, left bottom, color-stop(0.05, #aad2f0), color-stop(1, #8bc1ed));
`
const H3 = styled.h3`
  margin: 7px 0 4px;
  padding: 0 0 4px;
  border-bottom: 1px solid gray;
  font-size: 19.2px;
  font-weight: normal;
  color: #567;
`

const Ul = styled.ul`
  padding-left: 20px;
  padding-right: 20px;
  color: #567;
`

const Li = styled.li`
  font-size: 16px;
  line-height: 2.2;
  list-style-type: square;
  font-weight: normal;
`

const Line = styled.span`
  margin: 0 10px;
`

const A = styled.a`
  color: #567;
  font-weight: normal;
`

const Abbr = styled.abbr`
  color: #3d3d3d;
  text-decoration: none;
  &[title] {
    text-decoration: none;
  }
`

const AssetFooter = (props: IProps) => {
  return (
    <Div className="asset-footer">
      <H3>文档信息</H3>
      <Ul>
        <Li>
          版权声明：自由转载-非商用-非衍生-保持署名
          <Line className="u-lin">|</Line>
          <A href="http://creativecommons.org/licenses/by-nc-nd/3.0/deed.zh">Creative Commons BY-NC 3.0 CN </A>
        </Li>
        <Li>
          发表日期：{' '}
          <Abbr className="published" title={props.postDate}>
            {props.postDate}
          </Abbr>
        </Li>
      </Ul>
    </Div>
  )
}

export default AssetFooter

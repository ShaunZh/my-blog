/*
 * @Description:
 * @Author: Hexon
 * @Date: 2020-06-15 15:55:40
 * @LastEditors: Hexon
 * @LastEditTime: 2020-06-17 18:33:38
 */

import React from 'react';
// import fetch from '../libs/fetch';
import axios from 'axios';
// import Comment from '../components/Comment';

export default class ReactStatic extends React.Component {
  state = {
    username: '',
    password: '',
    tagName: '',
    accessToken: '',
  };

  componentDidMount() {
    console.log('test componentDidMount');
  }

  onSubmit = () => {
    const { username, password } = this.state;
    axios
      .post('http://127.0.0.1:7001/sign/signin', {
        username,
        password,
      })
      .then((res) => {
        this.setState({
          accessToken: `Bearer ${res.data.accessToken}`,
        });
      })
      .catch((err) => {
        console.log('err: ', err);
      });
  };

  onChangeUsername = (e: any) => {
    this.setState({
      username: e.target.value,
    });
  };

  onChangePassword = (e: any) => {
    this.setState({
      password: e.target.value,
    });
  };

  onChangeTagName = (e: any) => {
    this.setState({
      tagName: e.target.value,
    });
  };

  onSubmitTag = () => {
    const { tagName } = this.state;
    console.log('cookies: ', document.cookie);
    axios
      .post(
        'http://127.0.0.1:7001/tag/create',
        {
          name: tagName,
        },
        {
          headers: {
            authorization: this.state.accessToken,
          },
        },
      )
      .then((res) => {
        console.log('res: ', res);
      })
      .catch((err) => {
        console.log('err', err);
      });
  };

  render() {
    return (
      <div className="page-react">
        <div className="content">
          <div className="login-wrap">
            <span>登录接口测试</span>
            <input
              type="text"
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
            <input
              type="password"
              value={this.state.password}
              onChange={this.onChangePassword}
            />
            <button type="button" onClick={this.onSubmit}>
              登录
            </button>
          </div>
          <div className="tag-wrap">
            <input
              type="text"
              value={this.state.tagName}
              onChange={this.onChangeTagName}
            />
            <button type="button" onClick={this.onSubmitTag}>
              创建
            </button>
          </div>
        </div>
      </div>
    );
  }
}

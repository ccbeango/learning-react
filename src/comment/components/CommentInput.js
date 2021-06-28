import React, { PureComponent } from 'react';

import moment from 'moment';

import { Input, Button } from "antd";

export default class CommentInput extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    }
  }

  render() {
    return (
      <div>
        <Input.TextArea rows={4} 
                        value={this.state.content}
                        onChange={e => this.handleChange(e)}/>
        <Button type="primary" onClick={e => this.addComment()}>添加评论</Button>
      </div>
    )
  }

  handleChange(event) {
    this.setState({
      content: event.target.value
    })
  }

  addComment() {
    const commentInfo = {
      id: moment().valueOf(),
      avatar: "http://taosha01-1253585015.cos.ap-shanghai.myqcloud.com/taosha/d620bec0-d61c-11ea-9c32-1172a154412d.png?imageMogr2/crop/100x100/center",
      nickname: "ccbean",
      datetime: moment(),
      content: this.state.content,
      comments: [
        
      ]
    }

    this.props.submitComment(commentInfo);

    this.setState({
      content: ""
    })
  }
}

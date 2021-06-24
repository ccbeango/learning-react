import React, { PureComponent } from 'react'

export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      username: ""
    }
  }

  render() {
    const {username} = this.state;

    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="username">
            用户名: 
            <input type="text" 
                   id="username" 
                   onChange={e => this.handleUsernameChange(e)} 
                   value={username}/>
          </label>
          <input type="submit" value="提交"/>
        </form>
      </div>
    )
  }

  handleUsernameChange(event) {
    this.setState({
      username: event.target.value
    })
  }

  handleSubmit(event) {
    console.log(this.state.username);
    event.preventDefault();
  }
}
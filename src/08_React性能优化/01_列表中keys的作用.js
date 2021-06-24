import React, { Component } from 'react'

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      movies: ["星际穿越", "盗梦空间"]
    }
  }

  render() {
    return (
      <div>
        <h2>电影列表</h2>
        <ul>
          {
            this.state.movies.map((item, index) => {
              return <li>{item}</li>
            })
          }
        </ul>
        <button onClick={e => this.insertMovie()}>插入数据</button>
      </div>
    )
  }

  insertMovie() {
    // const newMovies = [...this.state.movies, "大话西游"];
    // this.setState({
    //   movies: newMovies
    // })

    const newMovies = ["大话西游", ...this.state.movies];
    this.setState({
      movies: newMovies
    })
  }
}
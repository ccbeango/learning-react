import React, { PureComponent } from 'react'

export default class Detail extends PureComponent {
  render() {
    console.log(this.props.match)
    return (
      <div>
        详情: {this.props.match.params.id}
      </div>
    )
  }
}

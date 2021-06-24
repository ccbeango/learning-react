import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TabControl extends Component {
  static propTypes = {
    titles: PropTypes.array.isRequired
  }

  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0
    }
  }

  render() {
    const { currentIndex } = this.state;

    return (
      <div className="tab-control">
        {
          this.props.titles.map((item, index) => {
            return (
              <div 
                key={index}
                className={`tab-item ${index == currentIndex ? 'active' : ''}`} 
                onClick={e => this.itemClick(index)}
              >
                {item}
              </div>
            );
          })
        }
      </div>
    )
  }

  itemClick(index) { 
    this.setState({
      currentIndex: index
    });

    this.props.itemClick(index);
  }
}

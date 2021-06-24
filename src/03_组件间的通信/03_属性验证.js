import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ChildCpn extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    height: PropTypes.number,
    letters: PropTypes.array
  };

  static defaultProps = {
    name: 'Tom',
    height: 188,
    letters: ['D', 'E', 'F']
  };

  // 可省略
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <h2>函数子组件展示数据： {this.props.name}</h2>
      <ul>
        {
          this.props.letters.map(item => <li key={item}>{item}</li>)
        }
      </ul>
    </div>
    );
  }
}

ChildCpn2.propTypes = {
  name: PropTypes.string.isRequired,
  height: PropTypes.number,
  letters: PropTypes.array
};

ChildCpn2.defaultProps = {
  name: 'Tom',
  height: 188,
  letters: ['D', 'E', 'F']
};

function ChildCpn2(props) {
  return (
    <div>
      <h2>函数子组件展示数据： {props.name}</h2>
      <ul>
        {
          props.letters.map(item => <li key={item}>{item}</li>)
        }
      </ul>
    </div>
  );
}

export default class Com03 extends Component {
  render() {
    return (
      <div>
        <ChildCpn/>
        <ChildCpn2 name='Ccbean' height="182" letters={['A', 'B', 'C']} />
        <ChildCpn2 />
      </div>
    )
  }
}

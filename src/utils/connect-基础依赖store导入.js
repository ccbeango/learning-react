import React from 'react';
import store from '../store';

export default function connect(mapStateToProp, mapDispatchToProp) {
  return function enhanceHOC(WrapComponent) {
    return class extends React.PureComponent {
      constructor(props) {
        super(props);

        this.state = {
          storeState: mapStateToProp(store.getState())
        };
      }

      componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
          this.setState({
            storeState: mapStateToProp(store.getState())
          });
        })
      }

      componentWillUnmount() {
        this.unsubscribe();
      }

      render() {
        return <WrapComponent
          {...this.props}
          {...mapStateToProp(store.getState())}
          {...mapDispatchToProp(store.dispatch)}
        />
      }
    }
  }
}
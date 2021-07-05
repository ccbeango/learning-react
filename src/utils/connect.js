import React from 'react';
import { StoreContext } from './context';

export default function connect(mapStateToProp, mapDispatchToProp) {
  return function enhanceHOC(WrapComponent) {
    class EnhanceComponent extends React.PureComponent {
      constructor(props, context) {
        super(props);

        this.state = {
          storeState: mapStateToProp(context.getState())
        };
      }

      componentDidMount() {
        this.unsubscribe = this.context.subscribe(() => {
          this.setState({
            storeState: mapStateToProp(this.context.getState())
          });
        })
      }

      componentWillUnmount() {
        this.unsubscribe();
      }

      render() {
        return <WrapComponent
          {...this.props}
          {...mapStateToProp(this.context.getState())}
          {...mapDispatchToProp(this.context.dispatch)}
        />
      }
    }

    EnhanceComponent.contextType = StoreContext;

    return EnhanceComponent;
  }
}
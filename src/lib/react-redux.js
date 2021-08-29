import React from 'react';
import { bindActionCreators } from './redux'; 

const StoreContext = React.createContext();

function connect(mapStateToProps, mapDispatchToProps) {
  return function enhanceHOC(WrapComponent) {
    class EnhanceComponent extends React.PureComponent {
      constructor(props, context) {
        super(props);
        this.state = {
          props: {}
        }
      }

      componentDidMount() {
        this.unsubscribe = this.context.subscribe(() => {
          this.update();
        })

        this.update();
      }

      componentWillUnmount() {
        this.unsubscribe();
      }

      update() {
        const stateProps = mapStateToProps(this.context.getState());
        let dispatchProps = null;
        if (typeof mapDispatchToProps === 'function') {
          dispatchProps = mapDispatchToProps(this.context.dispatch)
        } else {
          dispatchProps = bindActionCreators(mapDispatchToProps, this.context.dispatch);
        }

        this.setState({
          props: {
            ...this.state.props,
            ...stateProps,
            ...dispatchProps
          }
        });
      }

      render() {
        return <WrapComponent
          {...this.props}
          {...this.state.props}
        />
      }
    }

    EnhanceComponent.contextType = StoreContext;

    return EnhanceComponent;
  }
}

export {
  StoreContext,
  connect
};

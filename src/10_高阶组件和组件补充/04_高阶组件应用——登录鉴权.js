import React, { PureComponent } from "react";

function withAuth(WrappedComponent) {
  return (props) => {
    if (props.isLogin) {
      return <WrappedComponent {...props} />;
    } else {
      return <LoginPage />;
    }
  };
}

class CartPage extends PureComponent {
  render() {
    return <h2>CartPage</h2>;
  }
}

const AuthCartPage = withAuth(CartPage);

class LoginPage extends PureComponent {
  render() {
    return <h2>LoginPage</h2>;
  }
}

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <AuthCartPage isLogin={true} />
      </div>
    );
  }
}

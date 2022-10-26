import { Component, Fragment } from "react";

class ShoppingCart extends Component {
  render() {
    const hasItems = this.props.items.length > 0;
    const isLoggedIn = this.props.user !== null;
    const hasCreditCard = isLoggedIn && this.props.user.creditcard !== null;
    const hasAddress = isLoggedIn && this.props.user.address !== null;
    const isAvailable = this.props.items.every((item) => !item.outOfStock);
    return isLoggedIn ? (
      hasCreditCard ? (
        <Fragment>
          <button disabled={!hasItems || !isAvailable}>Checkout</button>
          {hasAddress && (
            <button disabled={!hasItems || !isAvailable}>One-click buy</button>
          )}
        </Fragment>
      ) : (
        <button>Add credit card</button>
      )
    ) : (
      <Fragment>
        <button>Login</button>
        <button disabled={!hasItems || !isAvailable}>Checkout as guest</button>
      </Fragment>
    );
  }
}

class App extends Component {
  render() {
    const items = [1, 2, 3];
    const user = { creditcard: null, address: true };
    return <ShoppingCart items={items} user={user} />;
  }
}

export default App;

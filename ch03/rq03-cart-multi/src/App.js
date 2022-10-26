import { Component, Fragment } from "react";

class UserButtons extends Component {
  render() {
    const hasCreditCard = this.props.user.creditcard !== null;
    const hasAddress = this.props.user.address !== null;
    const disabled = !this.props.canCheckout;
    return hasCreditCard ? (
      <Fragment>
        <button disabled={disabled}>Checkout</button>
        {hasAddress && <button disabled={disabled}>One-click buy</button>}
      </Fragment>
    ) : (
      <button>Add credit card</button>
    );
  }
}

class GuestButtons extends Component {
  render() {
    return (
      <Fragment>
        <button>Login</button>
        <button disabled={!this.props.canCheckout}>Checkout as guest</button>
      </Fragment>
    );
  }
}

class ShoppingCart extends Component {
  render() {
    const hasItems = this.props.items.length > 0;
    const isLoggedIn = this.props.user !== null;
    const isAvailable = this.props.items.every((item) => !item.outOfStock);
    const canCheckout = hasItems && isAvailable;
    return isLoggedIn ? (
      <UserButtons user={this.props.user} canCheckout={canCheckout} />
    ) : (
      <GuestButtons canCheckout={canCheckout} />
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

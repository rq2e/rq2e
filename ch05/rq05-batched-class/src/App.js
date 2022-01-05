import React, {Component} from 'react';

function App() {
  return <PasswordField />
}
                                                                  
class PasswordField extends Component {
  state = {
    tooShort: false,
    missingDollar: false,
  }
  render() {
    const onChange = (evt) => {
      const password = evt.target.value;
      this.setState({ tooShort: password.length < 8 });
      this.setState({ missingDollar: !password.includes('$') });
    };
    return (
      <label>
        Password:
        <br />
        <input type="password" onChange={onChange} />
        {this.state.tooShort && <p>Too short!</p>}
        {this.state.missingDollar && <p>Needs more dollars!</p>}
      </label>
    );
  }
}


export default App;

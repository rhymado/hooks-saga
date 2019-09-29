import React, {Component} from 'react';
import {connect} from 'react-redux';

import logo from '../logo.svg';
import '../App.css';
import {fetchUser} from '../Publics/Redux/Actions/user';

class App extends Component {
  async componentDidMount () {
    await this.props.dispatch (fetchUser ());
  }
  render () {
    const {user} = this.props;
    console.log ('user = ', user);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

const mapStateToProps = ({user}) => {
  return {
    user,
  };
};

export default connect (mapStateToProps) (App);

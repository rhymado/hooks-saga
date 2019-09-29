import React, {useState, useEffect} from 'react';
import {connect, useDispatch} from 'react-redux';
import {Route, Link} from 'react-router-dom';

import AppHome from './Components/AppHome';
import logo from './logo.svg';
import HooksApp from './Components/hooksApp';
import './App.css';
import {fetchUser} from './Publics/Redux/Actions/user';

const HomeApp = ({list}) => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {typeof list === 'object' && list.user && list.user[0].gender}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div style={{justifyContent: 'space-evenly'}}>
          <Link to="/app">
            <button>
              <h2>app</h2>
            </button>
          </Link>
          <Link to="/hooks">
            <button>
              <h2>hooks</h2>
            </button>
          </Link>
        </div>
      </header>
    </div>
  );
};

const Home = props => {
  const {user} = props;
  const [name, setName] = useState ('');
  const [list, setList] = useState ('');
  const dispatch = useDispatch ();
  useEffect (() => {
    async function fetch () {
      dispatch (fetchUser ());
    }
    fetch ();
    // function a(b,c){return b+c}
    // a(2,3)
  }, []); // eslint-disable-line
  useEffect (
    //useEffect ketika data user berubah
    () => {
      setList (user);
    },
    [user]
  );
  return (
    <div>
      <Route
        path="/"
        exact
        render={props => {
          return <HomeApp {...props} list={list} />;
        }}
      />
      <Route
        path="/app"
        render={props => {
          return <AppHome {...props} />;
        }}
      />
      <Route
        path="/hooks"
        render={props => {
          return <HooksApp name={name} setName={setName} />;
        }}
      />
    </div>
  );
};

const mapStateToProps = ({user}) => {
  return {
    user,
  };
};

export default connect (mapStateToProps) (Home);

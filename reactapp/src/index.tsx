
import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import FirstComponent from './components/firstComponent';
import UserComponent from './components/usuario';

ReactDOM.render(
  <div>
    <h1>Hello, Welcome to React Typescript</h1>
    <FirstComponent/>
    <UserComponent name="Vladimir" age={26} address="Calle Elm Street" dob={new Date()}/>
  </div>,
  document.getElementById("root")
);
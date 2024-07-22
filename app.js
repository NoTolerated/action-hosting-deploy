// src/App.js
import React from 'react';
import SignUp from './components/SignUp';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <h1>Welcome to OPTR Gaming</h1>
      <SignUp />
      <Login />
    </div>
  );
}

export default App;

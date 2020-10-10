import React, { useState } from 'react';
import './App.css';
import { useStateValue } from './DataLayer';
import Login from './Login/Login'

function App() {
  // const[user, setUser] = useState(null);
  const[state, dispatch] = useStateValue();

  return (
    <div className="App">
      <h3> {state.user ? `The user logged in is ${state.user}` : `No user is logged in`} </h3>

      <Login  />
    </div>
  );
}

export default App;

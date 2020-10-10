import React from 'react'
import {useStateValue} from '../DataLayer'

function Login() {
  const[state, dispatch] = useStateValue();
  
  const loginTOapp = () => {
    // props.setUser("minato namakezi");
    dispatch({
      type: 'SET_USER',
      user:'Minato Namakezi',
    })
  };

  return (
    <div>
      <h1> i am login component</h1>
      <button onClick={loginTOapp}>LOGIN</button>
    </div>
  )
}

export default Login

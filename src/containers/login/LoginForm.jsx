import React from 'react';

import './loginForm.css';
import { NavLink } from 'react-router-dom';

const LoginForm = () => {
  return (
    <div className='gpt3__loginForm section__padding'>
        <div className='gpt3__loginForm-form'>
          <h2>Login</h2>
          <form>
            <div className='gpt3__loginForm-form_elements'>
              <p>Username</p>
              <input type="text" name="username" id="username" placeholder='Type your username'/>
              <p>Password</p>
              <input type='password'name="password" id="password" placeholder='Type your password'/>
              <p>Forgot password?</p>
            </div>
          </form>
          <button>Login</button>
          <NavLink to="/Register"><p>Don't have an Account ?</p></NavLink>
        </div>
    </div>
  )
}

export default LoginForm
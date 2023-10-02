import React from 'react'; 

import { Footer} from '../containers';
import {  Navbar} from '../components';
import { NavLink } from 'react-router-dom';

import './Register.css';

const Register = () => {
  return (
    <div className='Register'>
        <div className='gradient__bg'>
          <Navbar/>
        </div>
        <div className='gpt3__registerForm section__padding'>
          <div className='gpt3__registerForm-form'>
          <h2>Create Account</h2>
              <form>
                  <div className='gpt3__registerForm-form_elements'>
                    <input type="text" name="username" id="username" placeholder='Your name'/>
                    <input type='text'name="password" id="password" placeholder='Your email'/>
                    <input type="password" name="username" id="username" placeholder='Password'/>
                    <input type='password'name="password" id="password" placeholder='Repeat your password'/>
                    <label htmlFor="terms" className='gpt3__registerForm-form_checkbox'>
                       <input type="checkbox" name='terms' id='terms'/>
                       <p>I agree with the <a href="https://tinyurl.com/2xuab3sx">Terms of Service</a></p>
                     </label>
                    </div>
              </form>
          <button>Register</button>
          <NavLink to="/Login"><p>Already have an Account ?</p></NavLink>
          </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Register
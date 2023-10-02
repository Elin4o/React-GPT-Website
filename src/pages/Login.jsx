import React from 'react'; 

import { Footer,LoginForm} from '../containers';
import {Navbar} from '../components';

import './Login.css';

const Login = () => {
  return (
    <div className='login'>
        <div className='gradient__bg'>
          <Navbar/>
        </div>
        <div className='login__bg'>
          <LoginForm/>
        </div>
        <Footer/>
    </div>
  )
}

export default Login
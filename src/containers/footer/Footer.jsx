import React from 'react';
import './footer.css';
import gpt3Logo from '../../assets/logo.svg';
import FooterCTA from '../../components/footerCTA/FooterCTA';

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <FooterCTA/>
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={gpt3Logo} alt="logo" />
          <p>3519 Hedge Street</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contract</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contacts</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Get in touch</h4>
          <p>3519 Hedge Street</p>
          <p>(810) 556-9181</p>
          <p>info@gpt3.net</p>
        </div>
      </div>
      <div className='gpt3__footer-copyright'>
        <p>@2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div className="footer-wrapper">
      <div className="footer">
      <div className="copyright vertically-centered" style={{marginTop: '47px', marginBottom: '47px'}}>
      <div className="logo-national">
      <a href="https://www.ieee.org/"><img alt={"Logo"} src={require("../assets/logo_kite.png")} /></a>
      </div>
      <p>© Copyright 2019 UC Berkeley IEEE</p>
      </div>
      <div className="media vertically-centered" style={{marginTop: '51px', marginBottom: '51px'}}>
      <ul>
      <li className="mail">
        <a className="mailing" href="http://eepurl.com/c-RpPr"> Join our mailing list</a>
      </li>
      <li>
        <a href="https://www.facebook.com/pages/UC-Berkeley-IEEE/164764630218416" className="icon"><i className="icon-facebook"></i></a>
      </li>
      <li>
      <a href="https://www.linkedin.com/company/ieee-ucb/" className="icon"><i className="icon-linkedin"></i></a>
      </li>
      </ul>
      <br />
      </div>
      </div>
      </div>
    );
  }
}

export default Footer;

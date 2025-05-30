import React, { Component } from "react";
const products = [
  {
    features: "Features"
  },
  {
    enterprise : "Enterprise"
  },
  {
    supprot : "Support"
  },
  {
    prising : "Pricing"
  },
]
class Header extends Component {

  
  render() {
    console.log(products);
    return (
      <header className="d-flex shadow py-2">
        <h3>Company name</h3>
        <ul>
          <li className="features">
            <a href="#">Features</a>
          </li>
          <li className="enterprise">
            <a href="#">Enterprise</a>
          </li>
          <li className="supprot">
            <a href="#">Support</a>
          </li>
          <li className="prising">
            <a href="#">Pricing</a>
          </li>
          <li className="sigin">
            <button className="btn btn-outline-primary">Sign up</button>
          </li>
        </ul>
        <div className="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </header>
    );
  }
}

export default Header;

import React, {Component} from "react";

class Footer extends Component{
    render(){
        return(
            <section className="container py-5 ">
        <hr />

        <div className="footer">
            <div>
              <img className="imgs" src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" />
              <p>© 2017-2018</p>
            </div>
            <div className="d-flex box-text">
              <h4>Features</h4>
              <a href="#">Cool stuff</a>
              <a href="#">Random feature</a>
              <a href="#">Team feature</a>
              <a href="#">Stuff for developers</a>
              <a href="#">Another one</a>
              <a href="#">Last time</a>
            </div>
            <div className="d-flex box-text">
              <h4>Resources</h4>
              <a href="#">Resource</a>
              <a href="#">Resource name</a>
              <a href="#">Another resource</a>
              <a href="#">Final resource</a>
            </div> 
            <div className="d-flex box-text">
              <h4>About</h4>
              <a href="#">Team</a>
              <a href="#">Locations</a>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
            </div>
        </div>
      </section>
        )
    }
}
export default Footer;
import React, {Component} from "react";

class Section extends Component{
    render(){
        return(
            <section className="container py-5 d-flex" id="card">
            <div className="card shadow">
              <h4 className="text-center p-2">Free</h4>
              <div className="text-center card-box">
              <h1 className="text-center"><b>$0</b>/mo</h1>
              <p className="text-center">10 users included <br />
                  2 GB of storage <br />
                  Email support <br />
                  Help center access  </p>
              <button className="btn btn-outline-primary px-5 ">Sign up for free</button>
              </div>
            </div>
            <div className="card shadow">
              <h4 className="text-center p-2">Pro</h4>
              <div className="text-center card-box">
              <h1 className="text-center"><b>$14</b>/mo</h1>
              <p className="text-center">10 users included <br />
                  2 GB of storage <br />
                  Email support <br />
                  Help center access  </p>
              <button className="btn btn-primary px-5 ">Get started</button>
              </div>
            </div>
            <div className="card shadow">
              <h4 className="text-center p-2">Enterprise</h4>
              <div className="text-center card-box">
              <h1 className="text-center"><b>$29</b>/mo</h1>
              <p className="text-center">10 users included <br />
                  2 GB of storage <br />
                  Email support <br />
                  Help center access  </p>
              <button className="btn btn-primary px-5 ">Contact us</button>
              </div>
            </div>
            
          </section>
        )
    }
}
export default Section;
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="d-flex shadow py-2">
        <h3>Company name</h3>
        <ul>
          <li>
            <a href="#">Features</a>
          </li>
          <li>
            <a href="#">Enterprise</a>
          </li>
          <li>
            <a href="#">Support</a>
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <button className="btn btn-outline-primary">Sign up</button>
          </li>
        </ul>
      </header>
      <section id="rigthside " className="mt-5 ">
        <h1 className="text-center">Pricing</h1>
        <p className="text-center text-box">
          Quickly build an effective pricing table for your potential customers <br />
          with this Bootstrap example. It's built with default Bootstrap <br />
          components and utilities with little customization.
        </p>
      </section>
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
      <section className="container py-5 ">
        <hr />

        <div className="footer">
            <div>
              <img src="https://getbootstrap.com/docs/4.0/assets/brand/bootstrap-solid.svg" alt="" />
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
    </div>
  );
}

export default App;

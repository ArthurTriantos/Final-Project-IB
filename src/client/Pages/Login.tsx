import React, { useState } from "react";
import PageFooter from "../components/PageFooter";

const Login = () => {
  const [footer, setPageFooter] = useState([
    "Home",
    "Features",
    "FAQs",
    "About",
  ]);

  return (
    <>
      <main className="main-login-container">
        <div className="main-login-div d-flex mb-5 col-10 container">
          <div className="main-login-div col-10">
            {/* Jumbotron */}

            <div className="login-jumbotron jumbotron-fluid mt-5">
              <div className="container">
                <h1 className="display-4">iNDie Connect</h1>
                <p className="lead">
                  Connecting you with long lasting friendships and/or romantic
                  partnerships near you.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* card */}

        <div className="login-card-container container card border shadow-lg my-5">
          <div className="row no-gutters">
            <div className="col-md-6">
              <img
                src="https://redstickmom.com/wp-content/uploads/2018/10/2.jpg"
                className="card-img login-image"
                alt="..."
              />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                {/* Login and Password */}

                <form className="login-form row justify-content-center mt-5">
                  <div className="col-6">
                    <div className="form-group mt-5 text-center">
                      <label htmlFor="exampleInputEmail1">Email address</label>
                      <input
                        type="email"
                        className="form-control text-center"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                      />
                      <small
                        id="emailHelp"
                        className="form-text text-muted mt-3"
                      >
                        We'll never share your email with anyone else.
                      </small>
                    </div>
                    <div className="form-group mt-5 text-center">
                      <label htmlFor="exampleInputPassword1">Password</label>
                      <input
                        type="password"
                        className="form-control text-center"
                        id="exampleInputPassword1"
                        placeholder="Password"
                      />
                      <button
                        type="submit"
                        className="btn-submit btn-outline-primary mt-5 btn-lg"
                      >
                        Login
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>

        <footer className="footer">
          <div className="container">
            <ul className="nav footer-nav justify-content-center  pb-3 mb-3">
              {footer.map((footer, index) => (
                <PageFooter footer={footer} key={index} />
              ))}
            </ul>
            <p className="text-center">?? 2021 iNDie Connect, Inc</p>
          </div>
        </footer>
      </main>
    </>

    // <>
    //     <div className="login-page">
    //         <div className="form">
    //             <form>
    //                 {/* <lottie-player
    //                     src="https://assets7.lottiefiles.com/packages/lf20_jcikwtux.json"
    //                     background="transparent"
    //                     speed={1}
    //                     style={{ justifyContent: "center" }}
    //                     loop
    //                     autoPlay
    //                 /> */}
    //                 <input type="text" placeholder="???  username" />
    //                 <input type="password" id="password" placeholder="???  password" />
    //                 <i className="fas fa-eye" />
    //                 <br />
    //                 <br />
    //                 <button>LOGIN</button>
    //                 <p className="message" />
    //             </form>
    //             <form className="login-form">
    //                 <button type="button">
    //                     SIGN UP
    //                 </button>
    //             </form>
    //         </div>
    //     </div>
    // </>
  );
};

export default Login;

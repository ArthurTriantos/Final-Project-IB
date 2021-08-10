import React, { useState } from "react";

const Singup = () => {
  return (
    <>
      <main className="main-signup-container">
        <div className="main-signup-div d-flex mb-5 col-10 container">
          <div className="main-signup-div col-10">
            {/* Jumbotron */}

            <div className="signup-jumbotron jumbotron-fluid mt-5">
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

        <div className="signup-card-container container card my-5">
          <div className="row no-gutters">
            <div className="col-md-6">
              <img
                src="https://media.istockphoto.com/photos/multiethnic-group-of-young-people-picture-id501836175?k=6&m=501836175&s=612x612&w=0&h=WEabFSTwcc500vqgs3zlehA2T06yB-2__3M8TBnH3wk="
                className="card-img signup-image"
                alt="..."
              />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                {/* Login and Password */}

                <form className="signup-form row justify-content-center mt-5">
                  <div className="col-6">
                    <div className="form-group text-center">
                      <label htmlFor="exampleInputEmail1">Username</label>
                      <input
                        type="email"
                        className="form-control text-center"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        placeholder="Username"
                      />
                    </div>
                    <div className="form-group text-center">
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
                        className="form-text text-muted"
                      >
                        We'll never share your email with anyone else.
                      </small>
                    </div>
                    <div className="form-group text-center">
                      <label htmlFor="exampleInputPassword1">Password</label>
                      <input
                        type="password"
                        className="form-control text-center"
                        id="exampleInputPassword1"
                        placeholder="Password"
                      />
                      <label htmlFor="exampleInputPassword1">Confirm Password</label>
                      <input
                        type="password"
                        className="form-control text-center"
                        id="exampleInputPassword1"
                        placeholder="Confirm Password"
                      />
                      <button
                        type="submit"
                        className="btn-submit btn-outline-primary mt-5 btn-lg"
                      >
                        Sign Up!
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>

    // <>
    //   <div className="signup-page">
    //   <div className="form">
    //     <form>
    //       {/* <lottie-player
    //         src="https://assets7.lottiefiles.com/packages/lf20_jcikwtux.json"
    //         background="transparent"
    //         speed={1}
    //         style={{ justifyContent: "center" }}
    //         loop
    //         autoPlay
    //       /> */}
    //       <input type="text" placeholder="full name" />
    //       <input type="text" placeholder="email address" />
    //       <input type="text" placeholder="pick a username" />
    //       <input type="password" id="password" placeholder="set a password" />
    //       <i className="fas fa-eye" />
    //       <br />
    //       <br />
    //     </form>
    //     <form className="signup-form">
    //       <button type="button">
    //         SIGN UP
    //       </button>
    //     </form>
    //   </div>
    // </div>
    // </>
  );
};

export default Singup;

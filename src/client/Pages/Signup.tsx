import React, { useState } from "react";

const Singup = () => {

    return (
        <>
          <div className="login-page">
          <div className="form">
            <form>
              {/* <lottie-player
                src="https://assets7.lottiefiles.com/packages/lf20_jcikwtux.json"
                background="transparent"
                speed={1}
                style={{ justifyContent: "center" }}
                loop
                autoPlay
              /> */}
              <input type="text" placeholder="full name" />
              <input type="text" placeholder="email address" />
              <input type="text" placeholder="pick a username" />
              <input type="password" id="password" placeholder="set a password" />
              <i className="fas fa-eye" />
              <br />
              <br />
            </form>
            <form className="login-form">
              <button type="button">
                SIGN UP
              </button>
            </form>
          </div>
        </div>
        </>
    );
};

export default Singup;
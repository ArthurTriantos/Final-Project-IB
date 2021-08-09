import React, { useState } from "react";

const Login = () => {

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
                        <input type="text" placeholder="  username" />
                        <input type="password" id="password" placeholder="  password" />
                        <i className="fas fa-eye" />
                        <br />
                        <br />
                        <button>LOGIN</button>
                        <p className="message" />
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

export default Login;
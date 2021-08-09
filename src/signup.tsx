import React from 'react';


const App = () => {
    return (
        <>

;<>
  
  <title>Sign up</title>
  <link rel="stylesheet" type="text/css" href="signup.css" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
  />
  <link
    href="https://fonts.googleapis.com/css?family=Titillium+Web:400,300,600"
    rel="stylesheet"
    type="text/css"
  />
  <link
    rel="stylesheet"
    href="https://use.fontawesome.com/releases/v5.15.1/css/all.css"
    integrity="sha384-vp86vTRFVJgpjF9jiIGPEEqYqlDwgyBgEF109VFjmqGmIY/Y4HV4d3Gp2irVfcrp"
    crossOrigin="anonymous"
  />
  <div className="login-page">
    <div className="form">
      <form>
        <lottie-player
          src="https://assets7.lottiefiles.com/packages/lf20_jcikwtux.json"
          background="transparent"
          speed={1}
          style={{ justifyContent: "center" }}
          loop
          autoPlay
        />
        <input type="text" placeholder="full name" />
        <input type="text" placeholder="email address" />
        <input type="text" placeholder="pick a username" />
        <input type="password" id="password" placeholder="set a password" />
        <i className="fas fa-eye" onclick="show()" />
        <br />
        <br />
      </form>
      <form className="login-form">
        <button type="button" onclick="window.location.href='login.html'">
          SIGN UP
        </button>
      </form>
    </div>
  </div>
</>
</>
    );
};
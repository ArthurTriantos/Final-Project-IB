import React from 'react';

const App = () => {
    return (
        <>
;<>

  <link rel="stylesheet" type="text/css" href="login.css" />
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
        <input type="text" placeholder="  username" />
        <input type="password" id="password" placeholder="  password" />
        <i className="fas fa-eye" onclick="show()" />
        <br />
        <br />
        <button>LOGIN</button>
        <p className="message" />
      </form>
      <form className="login-form">
        <button type="button" onclick="window.location.href='signup.html'">
          SIGN UP
        </button>
      </form>
    </div>
  </div>
</>
    










        </>
    );
};
 



export default App;
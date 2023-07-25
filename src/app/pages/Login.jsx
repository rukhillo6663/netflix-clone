import React, { useEffect, useState } from 'react';
import SignIn from '../components/SignIn';
import '../styles/Login.css';

function Login() {
  const [signedIn, setSignedIn] = useState(false);

  const handleSignIn = () => {
    setSignedIn(true);
  };
  return (
    <div
      className="login"
      style={{
        background: `url(
          'https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/netflixteaser.png'
        )`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div
        className="login
    _background"
      >
        <img
          className="login_logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt=""
        />
        <button className="login_button" onClick={handleSignIn}>
          Sign In
        </button>
        <div className="login_gradient" />

        <div className="login_body">
          {signedIn ? (
            <SignIn />
          ) : (
            <>
              <h1>Unlimited films, TV shows and more.</h1>
              <h2>Watch anywhere. Cancel anytime</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership
              </h3>
              <div className="login_input">
                <form>
                  <input type="email" placeholder="Email address" />
                  <button className="login_getStarted" onClick={handleSignIn}>
                    Get Started{' '}
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Login;

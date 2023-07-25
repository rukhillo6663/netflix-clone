import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SignIn.css';
import { auth } from '../../firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

function SignIn() {
  const navigate = useNavigate();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const register = event => {
    event.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate('/');
        // ...
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  };
  const signIn = event => {
    event.preventDefault();
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then(userCredential => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        //navigate('/login');
        // ...
      })
      .catch(error => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // ..
      });
  };
  return (
    <div className="signIn">
      <form>
        <h1>Sign In</h1>
        <input
          ref={emailRef}
          className="signIn_input"
          type="email"
          placeholder="Email"
          required
        />
        <input
          ref={passwordRef}
          className="signIn_input"
          type="password"
          required
          placeholder="Password"
          name=""
          id=""
        />
        <button className="signIn_submit" type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className="signIn_gray">New to Netflix? </span>
          <span className="signIn_link" onClick={register}>
            Sign Up now.{' '}
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignIn;

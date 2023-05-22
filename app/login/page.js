"use client";

import Link from "next/link";
import React, { useState } from "react";
import "../../styles/login.css";
import { signIn } from "next-auth/react";
import Ctabutton from "../../public/component/ctaButton/button";
// import { Alert } from "react-alert";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const hanndleOtherClick = (e) => {
    e.preventDefault();
    alert("Oops! Please Use Sign In with Google");
  };

  // const submitHandler = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const data = await signIn("credentials", {
  //       redirect: false,
  //       email,
  //       password,
  //     });

  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  return (
    <article className="login-page-wrapper">
      <section className="login-section-one">
        <div className="section-one-item">Board.</div>
      </section>
      <section className="login-section-two">
        <div className="login-wrapper">
          <div className="sign-in-container">
            <div className="sign-in-tille">Sign In</div>
            <div className="sign-in-description">Sign in to your account</div>
            <div className="sign-in-action-wrapper">
              <div onClick={() => signIn("google")}>
                <Ctabutton provider={"Google"} />
              </div>
              <div onClick={(e) => hanndleOtherClick(e)}>
                <Ctabutton provider={"Apple"} />
              </div>
            </div>
            <form className="sign-in-form-wrapper">
              <label className="input-title">Email address</label>
              <input
                type="email"
                autoCapitalize="false"
                className="input-label"
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <label className="input-title">Password</label>
              <input
                type="password"
                autoCapitalize="false"
                className="input-label"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
              <a
                className="forgot-password-refferer"
                onClick={(e) => hanndleOtherClick(e)}
              >
                Forgot Password?
              </a>
              <button
                className="submit-button"
                onClick={(e) => hanndleOtherClick(e)}
              >
                Sign In
              </button>
            </form>
            <div
              className="create-account-tittle"
              onClick={(e) => hanndleOtherClick(e)}
            >
              Don't have and account?&nbsp;
              <a className="register-reffere"> Register here</a>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Login;

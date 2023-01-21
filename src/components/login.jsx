import React, { useRef, useState } from "react";
import "./component.css";
import { MdOutlineFacebook } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../firebase/fire";

function Login() {
  const [errors, setErrors] = useState("");
  const [signup, setSignup] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });
  const [Login, setLogin] = useState({
    email: "",
    password: "",
  });

  const loginn = useRef(null);
  const registerr = useRef(null);
  const btnn = useRef(null);

  let emailRegx =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const login = () => {
    loginn.current.style.left = "50px";
    registerr.current.style.left = "450px";
    btnn.current.style.left = "0";
  };

  const register = () => {
    loginn.current.style.left = "-400px";
    registerr.current.style.left = "50px";
    btnn.current.style.left = "110px";
  };

  const Signup = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    if (name == "fname") {
      setSignup({ ...signup, fname: value });
    } else if (name == "lname") {
      setSignup({ ...signup, lname: value });
    } else if (name == "email") {
      setSignup({ ...signup, email: value });
    } else if (name == "password") {
      setSignup({ ...signup, password: value });
    }
  };

  const reghandelar = (e) => {
    e.preventDefault();
    if (signup.fname.trim() === "") {
      setErrors("enter firstname");
      setTimeout(function () {
        setErrors("");
      }, 2000);
    } else if (signup.lname.trim() === "") {
      setErrors("enter lastname");
      setTimeout(function () {
        setErrors("");
      }, 2000);
    } else if (signup.email.trim() === "") {
      setErrors("enter email");
      setTimeout(function () {
        setErrors("");
      }, 2000);
    } else if (!emailRegx.test(signup.email)) {
      setErrors("please enter valid email");
      setTimeout(function () {
        setErrors("");
      }, 2000);
    } else if (signup.password.trim() === "") {
      setErrors("enter a password");
      setTimeout(function () {
        setErrors("");
      }, 2000);
    } else if (signup.password.length < 6) {
      setErrors("password should be at least 6");
      setTimeout(function () {
        setErrors("");
      }, 2000);
    } else {
      createUserWithEmailAndPassword(auth, signup.email, signup.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);

          if (errorCode == "auth/email-already-in-use") {
            setErrors("email already in use");
            setTimeout(function () {
              setErrors("");
            }, 2000);
          }

          // ..
        });
    }
  };

  const loginchange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    if (name == "loginemail") {
      setLogin({ ...Login, email: value });
    } else if (name == "loginpassword") {
      setLogin({ ...Login, password: value });
    }
  };

  const loginhandler = (e) => {
    e.preventDefault();
    if (Login.email.trim() === "") {
      setErrors("enter email");
      setTimeout(function () {
        setErrors("");
      }, 2000);
    } else if (!emailRegx.test(Login.email)) {
      setErrors("please enter valid email");
      setTimeout(function () {
        setErrors("");
      }, 2000);
    } else if (Login.password.trim() === "") {
      setErrors("enter a password");
      setTimeout(function () {
        setErrors("");
      }, 2000);
    } else if (Login.password.length < 6) {
      setErrors("password should be at least 6");
      setTimeout(function () {
        setErrors("");
      }, 2000);
    } else {
      signInWithEmailAndPassword(auth, Login.email, Login.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
          if (errorCode === "auth/wrong-password") {
            setErrors("wrong-password");
            setTimeout(function () {
              setErrors("");
            }, 2000);
          } else if (errorCode === "auth/user-not-found") {
            setErrors("user doesn't exist");
            setTimeout(function () {
              setErrors("");
            }, 2000);
          }
        });
    }
  };
  return (
    <>
      <div className="hero">
        <div className="form-box">
          <div className="button-box">
            <div ref={btnn} id="btn"></div>
            <button type="button" className="toggle-btn" onClick={login}>
              Log In
            </button>
            <button type="button" className="toggle-btn" onClick={register}>
              Register
            </button>
          </div>

          <div className="social-icons">
            <MdOutlineFacebook color="#4267B2" className="ic" size={25} />
            <FcGoogle className="ic" size={25} />
          </div>

          <div>{errors}</div>

          <form ref={loginn} id="login" className="input-group">
            <input
              type="email"
              placeholder="Enter your email"
              className="input-field"
              value={Login.email}
              name="loginemail"
              onChange={loginchange}
            />
            <input
              type="password"
              placeholder="Enter your password"
              className="input-field"
              value={Login.password}
              name="loginpassword"
              onChange={loginchange}
            />
            <input type="checkbox" className="check-box" />
            <span>show password</span>
            <button type="submit" className="submit-btn" onClick={loginhandler}>
              Log in
            </button>
          </form>

          <form ref={registerr} id="register" className="input-group">
            <input
              value={signup.fname}
              name="fname"
              type="text"
              placeholder="Enter your Firstname"
              className="input-field"
              onChange={Signup}
            />
            <input
              type="text"
              name="lname"
              placeholder="Enter your Lastname"
              className="input-field"
              onChange={Signup}
              value={signup.lname}
            />
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input-field"
              onChange={Signup}
              value={signup.email}
            />
            <input
              name="password"
              type="password"
              placeholder="Enter your password"
              className="input-field"
              onChange={Signup}
              value={signup.password}
            />
            <input type="checkbox" className="check-box" />
            <span>show password</span>
            <button onClick={reghandelar} type="submit" className="submit-btn">
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;

import React,{useRef} from "react";
import "./component.css";
import { MdOutlineFacebook } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";

function Login() {
    const loginn = useRef(null)
    const registerr = useRef(null)
    const btnn = useRef(null)


  const login = () => {
    loginn.current.style.left = "50px"
    registerr.current.style.left = "450px"
    btnn.current.style.left = "0"

  };

  const register = () => {
    loginn.current.style.left = "-400px"
    registerr.current.style.left = "50px"
    btnn.current.style.left = "110px"
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

          <form ref={loginn} id="login" className="input-group">
            <input
              type="email"
              placeholder="Enter your email"
              className="input-field"
            />
            <input
              type="password"
              placeholder="Enter your password"
              className="input-field"
            />
            <input type="checkbox" className="check-box" />
            <span>show password</span>
            <button type="submit" className="submit-btn">
              Log in
            </button>
          </form>

          <form ref={registerr} id="register" className="input-group">
            <input
              type="text"
              placeholder="Enter your Firstname"
              className="input-field"
            />
            <input
              type="text"
              placeholder="Enter your Lastname"
              className="input-field"
            />
            <input
              type="email"
              placeholder="Enter your email"
              className="input-field"
            />
            <input
              type="password"
              placeholder="Enter your password"
              className="input-field"
            />
            <input type="checkbox" className="check-box" />
            <span>show password</span>
            <button type="submit" className="submit-btn">
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;

// <div id='main' className="main">
//                 <div className='signup-main'>
//                     <div className="SignUp">
//                         <div className='form'>
//                             <h1>Sign Up</h1>
//                             <div className='input-group'>
//                                 <input type="text" />
//                                 <label for="">Enter Your First Name</label>
//                             </div>
//                             <div className='input-group'>
//                                 <input type="text" />
//                                 <label for="">Enter Your Last Name</label>
//                             </div>
//                             <div className='input-group'>
//                                 <input type="email" />
//                                 <label for="">Enter Your Email Address</label>
//                             </div>
//                             <div className='input-group'>
//                                 <input type="password" />
//                                 <label for="">Enter Your Password</label>
//                             </div>
//                             <div className='showpass'>
//                                 <input className="checkbox" type="checkbox" />
//                                 <label for="">Show Password</label><br />
//                             </div>
//                             <div className='signbtn'>
//                                 <button>Sign Up</button>
//                             </div>
//                             <div className='alogin'>
//                                 <span>Already have an account?</span><a href="#" className="loginback">Sign In</a>
//                             </div>
//                             <div className='asignup'>
//                                 <span>Or sign in with</span>
//                             </div>
//                             <div className="icon">
//                                 <MdOutlineFacebook className='fb' color='#3b5998 ' size={25} />
//                                 <FcGoogle className='gg' size={25} />
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className='signin-main'>
//                     <div className="Signin">
//                         <div className='form'>
//                             <h1>Sign In</h1>
//                             <div className='input-group'>
//                                 <input type="email" />
//                                 <label for="">Enter Your Email Address</label>
//                             </div>
//                             <div className='input-group'>
//                                 <input type="password" />
//                                 <label for="">Enter Your Password</label>
//                             </div>
//                             <div className='showpass'>
//                                 <input className="checkbox" type="checkbox" />
//                                 <label for="">Show Password</label><br />
//                             </div>
//                             <div className='signbtn'>
//                                 <button>Sign In</button>
//                             </div>
//                             <div className='alogin'>
//                                 <span>Don't have an account?</span><a href="#" className="loginback" onClick={signup}>Sign Up</a>
//                             </div>
//                             <div className='asignup'>
//                                 <span>Or sign in with</span>
//                             </div>
//                             <div className="icon">

//                                 <MdOutlineFacebook className='fb' color='#3b5998 ' size={25} />
//                                 <FcGoogle className='gg' size={25} />
//                             </div>
//                         </div>

//                     </div>

//                 </div>
//             </div>

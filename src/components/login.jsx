import React from 'react'
import './component.css'
import { MdOutlineFacebook } from 'react-icons/md'
import { FcGoogle } from 'react-icons/fc'



function Login() {
    let main = document.getElementById("main")

    const signup = () => {
        main.classList.toggle("active")
    }



    return (
        <>
            <div id='main' className="main">
                <div className='signup-main'>
                    <div className="SignUp">
                        <div className='form'>
                            <h1>Sign Up</h1>
                            <div className='input-group'>
                                <input type="text" />
                                <label for="">Enter Your First Name</label>
                            </div>
                            <div className='input-group'>
                                <input type="text" />
                                <label for="">Enter Your Last Name</label>
                            </div>
                            <div className='input-group'>
                                <input type="email" />
                                <label for="">Enter Your Email Address</label>
                            </div>
                            <div className='input-group'>
                                <input type="password" />
                                <label for="">Enter Your Password</label>
                            </div>
                            <div className='showpass'>
                                <input className="checkbox" type="checkbox" />
                                <label for="">Show Password</label><br />
                            </div>
                            <div className='signbtn'>
                                <button>Sign Up</button>
                            </div>
                            <div className='alogin'>
                                <span>Already have an account?</span><a href="#" className="loginback">Sign In</a>
                            </div>
                            <div className='asignup'>
                                <span>Or sign in with</span>
                            </div>
                            <div className="icon">
                                <MdOutlineFacebook className='fb' color='#3b5998 ' size={25} />
                                <FcGoogle className='gg' size={25} />
                            </div>
                        </div>
                    </div>
                </div>









                <div className='signin-main'>
                    <div className="Signin">
                        <div className='form'>
                            <h1>Sign In</h1>
                            <div className='input-group'>
                                <input type="email" />
                                <label for="">Enter Your Email Address</label>
                            </div>
                            <div className='input-group'>
                                <input type="password" />
                                <label for="">Enter Your Password</label>
                            </div>
                            <div className='showpass'>
                                <input className="checkbox" type="checkbox" />
                                <label for="">Show Password</label><br />
                            </div>
                            <div className='signbtn'>
                                <button>Sign In</button>
                            </div>
                            <div className='alogin'>
                                <span>Don't have an account?</span><a href="#" className="loginback" onClick={signup}>Sign Up</a>
                            </div>
                            <div className='asignup'>
                                <span>Or sign in with</span>
                            </div>
                            <div className="icon">

                                <MdOutlineFacebook className='fb' color='#3b5998 ' size={25} />
                                <FcGoogle className='gg' size={25} />
                            </div>
                        </div>

                    </div>

                </div>
            </div>


        </>
    )
}

export default Login
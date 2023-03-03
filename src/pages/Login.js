import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  return (
    <>
      <div className="px-setting lg:min-h-screen bg-greenColor flex py-20 lg:py-32  items-center justify-center">
        <div className="lg:w-3/4 md:h-96 flex items-center flex-col-reverse md:flex-row rounded-sm overflow-hidden">
          <div className="lg:w-1/2 h-full flex flex-col gap-4 items-center justify-center p-6 bg-bgColor text-green-900">
            <h2>Login</h2>
            <div className="flex items-center w-full">
              <input type="text" placeholder="username" className="w-full bg-white  focus:outline-none p-2 rounded-l-sm" />
              <FontAwesomeIcon icon={faUser} className="bg-white p-3 border-green-900 border-2 " />
            </div>
            <div className="flex items-center w-full">
              <input type="password" placeholder="password" className="w-full bg-white  focus:outline-none p-2 rounded-l-sm" />
              <FontAwesomeIcon icon={faLock} className="bg-white p-3 border-green-900 border-2 " />
            </div>
            <div className="flex flex-col gap-2 items-center">
              <h3>Forgot Password ? </h3>
              <button className="px-6 py-2 bg-green-900 text-white">Login</button>
              <h3>Or</h3>
              <Link to="/register">
                <button className="font-semibold">Register</button>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 h-full">
            <img className="w-full h-full" src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

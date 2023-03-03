import React from 'react';

const Register = () => {
  return (
    <div>
      <div className="px-setting lg:min-h-screen bg-greenColor flex py-20 lg:py-32  items-center justify-center">
        <div className="lg:w-3/4 md:h-96 flex items-center flex-col-reverse md:flex-row rounded-sm overflow-hidden">
          <div className="lg:w-1/2 h-full">
            <img className="w-full h-full" src="https://images.unsplash.com/photo-1523217582562-09d0def993a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80" alt="" />
          </div>
          <div className="lg:w-1/2 h-full flex flex-col gap-2 items-center justify-center p-6 bg-bgColor text-green-900">
            <h2>Register</h2>
            <div className="w-full">
              <label>Username</label>
              <input type="text" placeholder="username" className="w-full bg-white focus:outline-none p-2 rounded-l-sm" />
            </div>
            <div className="w-full">
              <label>Email</label>
              <input type="text" placeholder="emailexample@gmail.com" className="w-full bg-white focus:outline-none p-2 rounded-l-sm" />
            </div>
            <div className="w-full">
              <label>Password</label>
              <input type="password" placeholder="password" className="w-full bg-white focus:outline-none p-2 rounded-l-sm" />
            </div>

            <button className="font-semibold px-4 py-2 bg-green-900 text-white mt-4 rounded-md">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

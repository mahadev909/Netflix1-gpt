import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/16006346-87f9-4226-bc25-a1fb346a2b0c/9662d0fd-0547-4665-b887-771617268815/IN-en-20240115-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background-img"
        />
      </div>
      <form className="absolute w-3/12 p-12 bg-black my-36  mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
        <h1 className="text-3xl font-bold my-4">
          {showSignUp ? "Sign Up" : "Sign In"}
        </h1>
        {showSignUp && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-4 w-full bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-4 w-full bg-gray-700"
        />
        {showSignUp && (
          <input
            type="text"
            placeholder="Phone Number"
            className="p-2 my-4 w-full bg-gray-700"
          />
        )}
        <input
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full  bg-gray-700"
        />
        <button type="button" className="p-2 my-6 bg-red-500 w-full rounded-lg">
          {showSignUp ? "Sign Up" : "Sign In"}
        </button>
        <p
          onClick={() => setShowSignUp(!showSignUp)}
          className="cursor-pointer"
        >
          {showSignUp
            ? "Already registered? Sign In Now"
            : "New to Netflix? Sign Up Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;

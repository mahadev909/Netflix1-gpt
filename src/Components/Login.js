import React, { useRef, useState } from "react";
import Header from "./Header";
import checkValidData from "../Utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";
import { AVATAR_LOGO_URL, LOGIN_PAGE_BACKGROUND } from "../Utils/constants";

const Login = () => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [errorMessage, setErrorMessage] = useState();
  const dispatch = useDispatch();
  const name = useRef();
  const email = useRef();
  const password = useRef();
  const phoneNumber = useRef();

  const handleSignInButtonClick = () => {
    const message = checkValidData(
      email.current.value,
      password.current.value,
      phoneNumber?.current?.value,
      showSignUp
    );
    setErrorMessage(message);
    if (message) return;
    if (!showSignUp) {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  const handleSignUpButtonClick = () => {
    const message = checkValidData(
      email.current.value,
      password.current.value,
      phoneNumber?.current?.value,
      showSignUp
    );
    setErrorMessage(message);
    if (message) return;
    if (showSignUp) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: AVATAR_LOGO_URL,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              // An error occurred
              // ...
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
          // ..
        });
    }
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="h-screen object-cover" src={LOGIN_PAGE_BACKGROUND} alt="background-img" />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute w-[85%] md:w-3/12 p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="text-3xl font-bold my-4">
          {showSignUp ? "Sign Up" : "Sign In"}
        </h1>
        {showSignUp && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 my-4 w-full bg-gray-700"
        />
        {showSignUp && (
          <input
            ref={phoneNumber}
            type="text"
            placeholder="Phone Number"
            className="p-2 my-4 w-full bg-gray-700"
          />
        )}
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-4 w-full  bg-gray-700"
        />
        <p className="text-red-500 font-bold">{errorMessage}</p>
        <button
          type="button"
          className="p-2 my-6 bg-red-500 w-full rounded-lg"
          onClick={
            !showSignUp ? handleSignInButtonClick : handleSignUpButtonClick
          }
        >
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

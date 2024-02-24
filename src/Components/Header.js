import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../Utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { LOGO_URL } from "../Utils/constants";
import { GptSearch } from "../Utils/GptSearchSlice";
import { SUPPORTED_LANGUAGE_OPTIONS } from "../Utils/languageConst";
import { changeLanguage } from "../Utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const showGptSearch = useSelector((state) => state.gptSearch?.showGptSearch);
  const handleClick = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  const handleGptButtonClick = () => {
    dispatch(GptSearch());
  };

  const handleOnChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div className="w-full absolute bg-gradient-to-b from-black z-30 flex justify-between">
      <img className="w-48" src={LOGO_URL} alt="logo" />
      <div>
        {user && (
          <div className="flex">
            {showGptSearch && (
              <select
                className="bg-gray-500 text-white my-6 mx-3 rounded-lg"
                onChange={handleOnChange}
              >
                {SUPPORTED_LANGUAGE_OPTIONS.map((lang) => (
                  <option value={lang.identifier}>{lang.name}</option>
                ))}
              </select>
            )}
            <button
              className="w-24 my-6 mx-2 rounded-lg bg-blue-500"
              onClick={handleGptButtonClick}
            >
              {!showGptSearch ? "GPT Search" : "Homepage"}
            </button>
            <img
              className="w-12 my-6 mx-2 rounded-lg"
              src={user.photoURL}
              alt="avatar"
            />
            <button
              className="bg-red-500 my-6 mr-5 p-2 rounded-lg"
              onClick={handleClick}
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

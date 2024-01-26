import React from "react";

const checkValidData = (email, password, phoneNumber, showSignUp) => {
  const isEmailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  const isPhoneNumberValid = showSignUp
    ? /[6-9]{1}[0-9]{9}/.test(phoneNumber)
    : true;
  if (!isEmailValid) return "Email ID not valid";
  if (!isPasswordValid) return "Password not valid";
  if (!isPhoneNumberValid) return "Phone Number not valid";
  return null;
};

export default checkValidData;

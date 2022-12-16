import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const addressRef = useRef();
  const mobileRef = useRef();
  const navigate = useNavigate();

  const saveUser = (userInfo) => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    // console.log(userData);
    if (userData) {
      userData.push(userInfo)
      localStorage.setItem("userData", JSON.stringify(userData));
     
    } else {
      let userList = [];
      userList.push(userInfo);
      localStorage.setItem("userData", JSON.stringify(userList));
    }
  };
  const onSubmit = (e) => {
    e.preventDefault();
    let userInfo = {};
    userInfo[nameRef.current.name] = nameRef.current.value;
    userInfo[emailRef.current.name] = emailRef.current.value;
    userInfo[passwordRef.current.name] = passwordRef.current.value;
    userInfo[addressRef.current.name] = addressRef.current.value;
    userInfo[mobileRef.current.name] = mobileRef.current.value;
    console.log(userInfo);
    saveUser(userInfo);
    navigate("/login");
  };
  return (
    <>
      <div>Sign up page</div>
      <br />
      <form onSubmit={onSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="" ref={nameRef} />
        <br />
        <br />

        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="" ref={emailRef} />
        <br />
        <br />

        <label htmlFor="passward">Passward</label>
        <input type="text" name="passward" id="" ref={passwordRef} />
        <br />
        <br />

        <label htmlFor="address">Address</label>
        <input type="text" name="address" id="" ref={addressRef} />
        <br />
        <br />

        <label htmlFor="mobile">Mobile</label>
        <input type="text" name="mobile" id="" ref={mobileRef} />
        <br />
        <br />
        <button>sign up</button>
      </form>
    </>
  );
};

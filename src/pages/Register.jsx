import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRegisterMutation } from "../feature/api/authAPi";

const Register = () => {
  // const [error, setError] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPasswordConfirm] = useState("");
  const [register] = useRegisterMutation();
  const navigate = useNavigate();
  const registerHandler = async (e) => {
    e.preventDefault(e);
    const users = { name, email, password, password_confirmation };
    const data = await register(users);
    if (data?.data?.success) navigate("/login");
    // console.log(data?.data?.success);
    // setError(data?.error?.data?.errors)
    // console.log(data?.error?.data?.errors);
  };
  return (
    <div className=" w-full h-screen flex justify-center items-center">
      <form
        onSubmit={registerHandler}
        action=""
        className=" flex flex-col items-center bg-gray-50 p-10 gap-10 rounded shadow w-96"
      >
        <h1 className=" text-xl text-green-500">Register Account</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className=" w-72 outline-none border-b-2 py-3"
          placeholder="Name"
          name=""
          id=""
        />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className=" w-72 outline-none border-b-2 py-3"
          placeholder="Enter your email address"
          name=""
          id=""
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className=" w-72 outline-none border-b-2 py-3"
          placeholder="Password"
          name=""
          id=""
        />
        <input
          type="password"
          value={password_confirmation}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          className=" w-72 outline-none border-b-2 py-3"
          placeholder="Confirm Password"
          name=""
          id=""
        />
        <div className=" flex item-center justify-center flex-col">
          <small>
            Already have an account?{" "}
            <Link to={"/login"}>
              <span className=" text-green-500 cursor-pointer">login</span>
            </Link>
          </small>
          <button
            type="submit"
            className=" mt-3 bg-green-400 rounded-sm px-10 py-2 mx-auto text-center text-white"
          >
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;

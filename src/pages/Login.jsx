import Cookies from "js-cookie";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useLoginMutation } from "../feature/api/authAPi";
import { addUser } from "../feature/services/authSlice";

const Login = () => {
  const [password, setPassword] = useState("asdffdsa");
  const [email, setEmail] = useState("aungaung@gmail.com");
  const [fail, setFail] = useState("");
  const dispath = useDispatch();

  const [login] = useLoginMutation();
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault(e);
    const { data } = await login({ password, email });

    dispath(addUser({ user: data?.user, token: data?.token }));

    if (data?.success) {
      navigate("/");
      setFail("success");
    } else {
      setFail("Login Fail");
    }
  };
  return (
    <div className=" w-full h-screen flex justify-center items-center">
      <form
        onSubmit={loginHandler}
        action=""
        className=" flex flex-col items-center bg-gray-50 p-10 gap-10 rounded shadow w-96"
      >
        <h1 className=" text-xl text-blue-500">Login Account</h1>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          className=" w-72 outline-none border-b-2 py-3"
          placeholder="Enter your email address"
          name=""
          id=""
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          className=" w-72 outline-none border-b-2 py-3"
          placeholder="Enter your Password"
          name=""
          id=""
        />
        <span className=" text-red-500">{fail}</span>
        <div className="flex item-center justify-center flex-col">
          <small>
            Don't have an account?{" "}
            <Link to={"/register"}>
              <span className=" text-green-500 cursor-pointer">register</span>
            </Link>
          </small>
          <button
            type="submit"
            className=" mt-3 bg-blue-400 rounded-sm px-10 py-2 text-white"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;

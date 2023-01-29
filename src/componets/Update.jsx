import Cookies from "js-cookie";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetSingleContactQuery,
  useUpdataContactsMutation,
} from "../feature/api/ContactApi";

const Update = () => {
  const [loading, setLoading] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const { id } = useParams();
  const token = Cookies.get("token");
  const navigate = useNavigate();
  useEffect(() => {}, []);
  const { data } = useGetSingleContactQuery({ id, token });

  const [updateContact] = useUpdataContactsMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const contact = { id, name, email, phone };
    console.log(contact);
    const { data } = await updateContact({ contact, token, id });
    console.log(data);
    if (data?.success) {
      navigate("/");
    }
  };
  return (
    <>
      {data ? (
        <div
          id="authentication-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="flex items-center justify-center w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal md:h-full"
        >
          <div className="relative w-full h-full max-w-md md:h-auto">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="px-6 py-6 lg:px-8">
                <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                  Edit Here
                </h3>
                <form onSubmit={handleSubmit} className="space-y-6" action="#">
                  {/* your name */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your Name
                    </label>
                    <input
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      type="text"
                      name="name"
                      id="name"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder={`${
                        data?.contact?.name
                      }`}
                      required
                    />
                  </div>
                  {/* your email  */}
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your email
                    </label>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      name="email"
                      id="email"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder={`${
                        data?.contact?.email
                      }`}
                      required
                    />
                  </div>
                  {/* your phone  */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                      Your phone number
                    </label>
                    <input
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      type="number"
                      name="phone"
                      id="phone"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                      placeholder={`${
                        data?.contact?.phone
                      }`}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    UPDATE
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h1 className=" flex justify-center items-center text-blue-600 h-screen text-4xl">Loading</h1>
      )}
    </>
  );
};

export default Update;

import Cookies from "js-cookie";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetSingleContactQuery, useUpdateContactsMutation,
 
} from "../feature/api/ContactApi";

const Update = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const { id } = useParams();
  const token = Cookies.get("token");
  const navigate = useNavigate();
  useEffect(() => {}, []);
  const { data } = useGetSingleContactQuery({ id, token });

  const [updateContact] = useUpdateContactsMutation();

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
          className="flex items-center justify-center w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-screen"
        >
          <div className="relative w-full h-full max-w-md md:h-auto">
            <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <div className="px-6 py-6 lg:px-8">
                <div className=" flex justify-between items-center">
                  <h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white">
                    Edit Here
                  </h3>
                  <button
                    type="button"
                    onClick={() => navigate("/")}
                    className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                    data-modal-hide="authentication-modal"
                  >
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
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
                      placeholder={`${data?.contact?.name}`}
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
                      placeholder={`${data?.contact?.email}`}
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
                      placeholder={`${data?.contact?.phone}`}
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
        <h1 className=" flex justify-center items-center text-blue-600 h-screen text-4xl">
          Loading
        </h1>
      )}
    </>
  );
};

export default Update;

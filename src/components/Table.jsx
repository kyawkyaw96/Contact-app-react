import Cookies from "js-cookie";
import React, { useState } from "react";
import {
  useDeleteContactsMutation,
  useGetContactsQuery,
} from "../feature/api/ContactApi";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
const Table = () => {
  const token = Cookies.get("token");
  const { data } = useGetContactsQuery({ token });
  const [deleteContacts] = useDeleteContactsMutation();

  return (
    <>
      {data ? (
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-6">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone Number
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data?.contacts?.data?.map((contact) => (
                <tr
                  key={contact?.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {contact?.name}
                  </th>
                  <td className="px-6 py-4">{contact?.email}</td>
                  <td className="px-6 py-4"> {contact?.phone}</td>
                  <td className="px-6 py-4 flex">
                    <Link to={`/update/${contact?.id}`}>
                      <MdEdit className=" cursor-pointer hover:text-green-400 text-xl mr-4" />
                    </Link>
                    <MdDelete
                      onClick={() => deleteContacts({ id: contact?.id, token })}
                      className=" cursor-pointer hover:text-red-400 text-xl"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h1 className=" flex justify-center items-center text-blue-600 h-screen text-4xl">
          Loading
        </h1>
      )}
    </>
  );
};
export default Table;

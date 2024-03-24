import React from "react";
import Modal from "../components/Modal";
import Navbar from "../components/Navbar";
import Table from "../components/Table";

const DashBoard = () => {
  return (
    <div className=' container mx-auto'>
      <Navbar />
      <Modal />
      <Table />
    </div>
  );
};

export default DashBoard;

import React from "react";
import Modal from "../componets/Modal";
import Navbar from "../componets/Navbar";
import Table from "../componets/Table";

const DashBoard = () => {
  return (
    <div className=" container mx-auto">
      <Navbar />
      <Modal />
      <Table />
    </div>
  );
};

export default DashBoard;

import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import DashBoard from "./pages/DashBoard";
import Login from "./pages/Login";
import Register from "./pages/Register";
import RouteGuard from "./components/RouteGuard";
import Update from "./components/Update";
const App = () => {
  return (
    <div className=' container mx-auto'>
      <Routes>
        <Route
          path='/'
          element={
            <RouteGuard>
              <DashBoard />
            </RouteGuard>
          }
        />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/update/:id' element={<Update />} />
      </Routes>
    </div>
  );
};

export default App;

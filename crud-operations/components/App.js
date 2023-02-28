import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Sidebar from "./Sidebar";
import Information from "./Information";
import Course from "./containers/Course";
import Payment from "./containers/Payment";
import Report from "./containers/Report";
import Settings from "./containers/Settings";
import Students from "./containers/Students";


const App = () => {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Information />} />
        <Route path="/home" element={<Information />} />
        <Route path="/course" element={<Course />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/report" element={<Report />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/students" element={<Students />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;

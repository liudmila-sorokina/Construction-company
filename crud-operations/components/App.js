import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Sidebar from "./Sidebar";
import Information from "./Information";
import Courses from "./containers/Courses";
import Payments from "./containers/Payments";
import Report from "./containers/Report";
import Settings from "./containers/Settings";
import Students from "./containers/Students";
import StudentsForm from "./StudentsForm";
import CoursesForm from "./CoursesForm";
import Student from "./Student";
import Course from "./Course";
import Payment from "./Payment";
import StudentsUpdate from "./StudentsUpdate";
import CoursesUpdate from "./CoursesUpdate";
import PaymentsUpdate from "./PaymentsUpdate";
import { MessageContext } from "./MessageContext";

const App = () => {
  return (
    <BrowserRouter>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Information />} />
        <Route path="/home" element={<Information />} />
        <Route path="/course" element={<Courses />} />
        <Route path="/payment" element={
          <MessageContext.Provider value={{message:"We have debtors!!!", studentName:"Jhony"}}>
            <Payments />
          </MessageContext.Provider>
        } />
        <Route path="/report" element={<Report />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/students" element={
          <MessageContext.Provider value={{message:"We have debtors!!!", studentName:"Jhony"}}>
            <Students value2="TRTRTRTR" />
          </MessageContext.Provider>
        } />
        <Route path="/students/new" element={<StudentsForm />} />
        <Route path="/courses/new" element={<CoursesForm />} />
        <Route path="/students/:id" element={<Student />} />
        <Route path="/courses/:id" element={<Course />} />
        <Route path="/payments/:id" element={<Payment />} />
        <Route path="/students/:id/edit" element={<StudentsUpdate />} />
        <Route path="/courses/:id/edit" element={<CoursesUpdate />} />
        <Route path="/payments/:id/edit" element={<PaymentsUpdate />} />
      </Routes>
    </BrowserRouter>
  )
};

export default App;

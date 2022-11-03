import React from "react";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import store  from './app/store';
import { Provider } from 'react-redux';

import "./index.css";

import Header from "./components/Header/index";
import Login from "./pages/login";
import AdminHomepage from "./pages/admin/adminHomepage";
import UserDashboard from "./pages/admin/userDashboard";
import BooksDashboard from "./pages/admin/booksDashboard";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/AdminHomepage" element={<AdminHomepage />} />
          <Route path="/UserDashboard" element={<UserDashboard />} />
          <Route path="/BooksDashboard" element={<BooksDashboard />} />

        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

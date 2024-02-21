import React from "react";

import Login from "./pages/login/index.tsx";
import MembersScreen from "./pages/members/index.tsx";
import UserBooksScreen from "./pages/userBooks/index.tsx";
import LoanScreen from "./pages/loan/index.tsx";
import Homepage from "./pages/home/index";

import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";

import { UserProvider } from "./comons/context/user/index.tsx";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <UserProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/members-screen" element={<MembersScreen />} />
              <Route path="/loan-screen" element={<LoanScreen />} />
              <Route path="/user-books-screen" element={<UserBooksScreen />} />
              <Route path="/library-collection" element={<Homepage />} />
            </Routes>
          </BrowserRouter>
      </UserProvider>
    </ChakraProvider>
  </React.StrictMode>
);

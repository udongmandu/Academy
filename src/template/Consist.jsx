import React from "react";
import "../style/index.css";
import SideBar from "./SideBar";
import Topbar from "./Topbar";
import TestPage from "../pages/test";
import Product from "../pages/product";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Consist() {
  return (
    <BrowserRouter>
      <div className="w-full h-full flex flex-col">
        <Topbar />
        <div className="flex h-full bg-[#FAFBFE]">
          <SideBar />
          <Routes>
            <Route path="/" element={<TestPage />} />
            <Route path="/product" element={<Product />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

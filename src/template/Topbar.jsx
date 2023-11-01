import React from "react";
import "../style/index.css";
import Button from "../Components/ButtonTop";

export default function Topbar() {
  return (
    <div className="w-full h-24 flex items-center justify-between px-16 bg-[#F3F4F6] border-b-2 text-slate-500">
      <img className="w-48 h-12" src="" alt="" />
      <Button
        styleClass="w-36 h-11 border-4 rounded-lg"
        onClick={() => {
          console.log("login");
        }}
        label="로그인"
      />
    </div>
  );
}

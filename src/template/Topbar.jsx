import React, { useEffect, useState } from "react";
import "../style/index.css";
import Button from "../Components/ButtonTop";

export default function Topbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  function logout() {
    localStorage.removeItem("user");
    window.location.reload();
  }

  return (
    <div className="w-full h-24 flex items-center justify-between px-16 bg-[#F3F4F6] border-b-2 text-slate-500">
      <img className="w-48 h-12" src="" alt="" />
      {!user ? (
        <Button
          URL="/sign-in"
          label="로그인"
          styleClass={"w-28 h-11 border-[3px] rounded-lg fontA text-ms"}
        />
      ) : (
        <div className="flex items-center gap-5">
          <div className="font-extrabold text-lg">{user.name}</div>
          <Button onClick={logout} label={"로그아웃"} width={80} />
        </div>
      )}
    </div>
  );
}

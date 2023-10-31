import React, { useEffect, useState } from "react";
import "../style/index.css";
import { useLocation } from "react-router-dom";

export default function SideBar() {
  const sideMenus = {
    selectList: [
      // 첫 번째는 제목으로 들어감
      [
        { name: "test1" },
        { name: "회원관123리", href: "/" },
        { name: "판매내역", href: "/product" },
        { name: "거래내역", href: "/Transaction" },
      ],
      [
        { name: "test2" },
        { name: "회원관리", href: "/AA" },
        { name: "판매내역", href: "/BB" },
        { name: "거래내역", href: "/CC" },
      ],
    ],
  };

  const [activeMenuItem, setActiveMenuItem] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const index = sideMenus.selectList.findIndex((menu) =>
      menu.some((item) => item.href === location.pathname)
    );

    setActiveMenuItem(index);
  }, [location.pathname, sideMenus.selectList]);

  return (
    <div className="relative w-60 h-full">
      <div className="h-full">
        {sideMenus.selectList.map((menu, index) => (
          <div
            className={`h-44 flex flex-col ${
              index === activeMenuItem
                ? "border-r-4 border-green-500 rounded-r-xl"
                : "border-r-4  rounded-r-xl"
            }`}
            key={index}
          >
            <h1
              className="baemin text-2xl font-bold w-full text-left py-3 border-y-2 px-5"
              style={{ userSelect: "none" }}
            >
              {menu[0].name}
            </h1>
            {menu.slice(1).map((item, itemIndex) => (
              <a
                className="baemin text-right py-1 px-7"
                key={itemIndex}
                href={item.href}
              >
                {item.name}
              </a>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

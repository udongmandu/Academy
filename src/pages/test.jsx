import React from "react";
import DataTableV1 from "../Components/dataTableV1/DataTableV1";
import SearchBox from "../Components/searchBox/SearchBox";
import { useState } from "react";

export default function TestPage() {
  const [search, setSearch] = useState({ text: "", option: "student" });

  const columns = [
    { columnName: "no", data: "no" },
    { columnName: "이름", data: "name" },
    { columnName: "모시깽", data: "hi" },
    { columnName: "저시깽", data: "name" },
    { columnName: "응애", data: "name" },
  ];

  const data = [
    { name: "hello", hi: "hi" },
    { name: "hellasdfasfsdfo" },
    { name: "hello" },
    { name: "hello" },
    { name: "hello" },
  ];

  return (
    <div className="w-full justify-center flex px-10 py-20">
      <div className="min-w-[50vw] border-4 border-r-[10px] border-b-[10px] rounded-md shadow-2xl border-[#5272F2]">
        <SearchBox onSubmit={setSearch} option={"student"}></SearchBox>
        <DataTableV1
          title={"안녕하세요 table"}
          columns={columns}
          datas={data}
        />
      </div>
    </div>
  );
}

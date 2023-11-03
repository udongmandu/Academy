import React from "react";
import PropTypes from "prop-types";
import { SEARCH_STUDENT } from "../../constants/searchFilter";
import { useState } from "react";
import Button from "../ButtonTop";

export default function SearchBox(props) {
  const { onSubmit, option } = props;
  const [searchOption, setSearchOption] = useState("name");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      text: e.target.elements["nameText"].value,
      option: searchOption,
    });
  };

  const resetTextField = (e) => {
    e.preventDefault();
    document.querySelector("#text-field").value = "";
  };

  const filterOption = (option) => {
    if (option === "student") return SEARCH_STUDENT;
    else return false;
  };
  return (
    <div className="w-full p-10 fontA">
      <div className="w-full h-40 border border-[#B3A492] shadow-md rounded-md p-5">
        <form
          className="flex gap-4 w-full flex-col"
          onSubmit={(e) => handleSubmit(e)}
        >
          <div className="w-full flex">
            <select
              className="w-24 mr-5 rounded-md border border-[#B3A492]"
              onChange={(e) => setSearchOption(e.target.value)}
              id=""
            >
              {Object.values(filterOption(option)).map((filter) => (
                <option key={filter.value} value={filter.value}>
                  {filter.name}
                </option>
              ))}
            </select>
            <input
              className="px-2 w-full h-11 rounded-md border border-[#B3A492]"
              name="nameText"
              id="text-field"
              placeholder={`검색기능을 이용하실 수 있습니다.`}
            />
          </div>
          <div className="mt-auto flex justify-end items-end gap-3">
            <div className="flex justify-center w-full border border-green-300 h-full">
              추가예정
            </div>
            <button className="text-xs w-16 h-10 px-2 rounded-md border bg-[#5272F2] text-white">
              검색
            </button>
            <Button onClick={resetTextField} label={"초기화"}>
              초기화
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}

SearchBox.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  option: PropTypes.string,
};

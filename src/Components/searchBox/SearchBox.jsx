import React from "react";
import PropTypes from "prop-types";
import { SEARCH_STUDENT } from "../../constants/searchFilter";
import { useState } from "react";

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

  const filterOption = (option) => {
    if (option === "student") return SEARCH_STUDENT;
    else return false;
  };

  return (
    <div className="w-full p-10">
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
              placeholder="이름을 검색하여 찾아보세요."
            />
          </div>
          <div className="mt-auto flex justify-end items-end gap-3">
            <div className="flex justify-center w-full border border-green-300 h-full">
              추가예정
            </div>
            <button className="text-xs w-16 h-10 px-2 rounded-md border bg-gray-500 text-white">
              초기화
            </button>
            <button className="text-xs w-16 h-10 px-2 rounded-md border bg-gray-500 text-white">
              검색
            </button>
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

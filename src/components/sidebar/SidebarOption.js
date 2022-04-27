import React from "react";
import "../../styles/sidebar/sidebar-option.scss";
import { MdKeyboardArrowDown } from "react-icons/md";

const SidebarOption = ({ title }) => {
  return (
    <div className="sidebarOption">
      <p>{title}</p>
      <button>
        <MdKeyboardArrowDown />
      </button>
    </div>
  );
};

export default SidebarOption;

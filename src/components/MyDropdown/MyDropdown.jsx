import { useState } from "react";
import "./Dropdown.css";
import { FiChevronDown } from "react-icons/fi";

// eslint-disable-next-line react/prop-types
export default function MyDropdown({ title, description, id }) {
  const [toggleDropDown, setToggleDropDown] = useState(false);

  const handleDropdownClick = () => {
    setToggleDropDown(!toggleDropDown);
  };

  return (
    <>
      <div key={id} className={`dropdown ${toggleDropDown ? "open" : ""}`}>
        <div className={`header-dropdown shadow  ${toggleDropDown ? "text-slate-100 bg-orange-400" : ""}`}>
          <span>{title}</span>
          <div className="toggle cursor-pointer">
            <FiChevronDown onClick={handleDropdownClick} className={`arrow-down ${toggleDropDown ? "animation-toggle" : ""}`} />
          </div>
        </div>
        <div className="dropdown-content text-[13px] text-zinc-500 font-normal">
          <p className="leading-[20.80px] m-auto">{description}</p>
        </div>
      </div>
    </>
  );
}

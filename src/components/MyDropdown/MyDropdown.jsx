import { useState } from "react";
import "./Dropdown.css";
import { FiChevronDown } from "react-icons/fi";

// eslint-disable-next-line react/prop-types
export default function MyDropdown({ title, description, id, content, index, isOpen }) {
  const [selected, setSelected] = useState(isOpen);

  const handleClick = (id) => {
    const dropdownOpen = content.find((item) => item.isOpen === true);
    // content.map((item) => {
    //   if (item.id !== id && dropdownOpen) {
    //     return setSelected(selected);
    //   }
    if (dropdownOpen) {
      return setSelected(selected);
    } else {
      setSelected(!selected);
    }
  };

  return (
    <>
      <div key={id} className={`dropdown`}>
        <div className={`header-dropdown shadow  ${selected ? "text-slate-100 bg-orange-400" : ""}`}>
          <span>{title}</span>
          <div className="toggle cursor-pointer">
            <FiChevronDown onClick={() => handleClick(id)} className={`arrow-down ${selected ? "animation-toggle" : ""}`} />
          </div>
        </div>
        <div className={`dropdown-content text-[13px] text-zinc-500 font-normal ${selected ? "open" : "dropdown-content"}`}>
          <p className="leading-[20.80px] m-auto">{description}</p>
        </div>
      </div>
    </>
  );
}

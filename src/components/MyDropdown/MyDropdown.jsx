import { useState } from "react";
import "./Dropdown.css";
import { FiChevronDown } from "react-icons/fi";

// eslint-disable-next-line react/prop-types
export default function MyDropdown({ textHeader }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`dropdown ${isOpen ? "open" : ""}`}>
      <div className={`header-dropdown shadow  ${isOpen ? "text-slate-100 bg-orange-400" : ""}`}>
        <span>{textHeader}</span>
        <div className="toggle cursor-pointer">
          <FiChevronDown onClick={toggleDropdown} className={`arrow-down ${isOpen ? "animation-toggle" : ""}`} />
        </div>
      </div>
      <div className="dropdown-content text-[13px] text-zinc-500 font-normal">
        <p className="leading-[20.80px] m-auto">
          AeroLand appears professional in design and responsive in performance. It proves to be highly customizable and efficient for landing site building. Engage yourself in the most effortless and well-appointed process with AeroLand.
        </p>
      </div>
    </div>
  );
}

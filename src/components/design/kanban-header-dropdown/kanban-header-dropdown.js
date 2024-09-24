import DownIcon from "../../../assets/images/svg/down";
import GlobalDataContext from "../../../core/context/global-content";
import groupOptionsData from "../../../core/dictionary/group-options";
import orderOptionsData from "../../../core/dictionary/order-options";
import "./kanban-header-dropdown.css";
import { useContext, useEffect, useRef, useState } from "react";
import Select from "react-select";
// Below is the custom css for select component
const customStyles = {
  control: (provided) => ({
    ...provided,
    minHeight: "28px", // Adjust the height to make it smaller
    height: "28px",
    minWidth: "120px",
    maxWidth: "120px",
    fontSize: "12px", // Adjust the font size
    fontFamily: "Arial, sans-serif",
  }),
  input: (provided) => ({
    ...provided,
    margin: "0px",
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    height: "28px",
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: "0 8px",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    padding: "4px", // Smaller padding for the dropdown indicator
  }),
  clearIndicator: (provided) => ({
    ...provided,
    padding: "4px", // Smaller padding for the clear indicator
  }),
  option: (provided) => ({
    ...provided,
    fontSize: "12px",
    padding: "8px", // Adjust the font size for the options
    fontFamily: "Arial, sans-serif",
  }),
  menu: (provided) => ({
    ...provided,
    fontFamily: "Arial, sans-serif", // Custom font for dropdown menu
  }),
  menuList: (provided) => ({
    ...provided,
    padding: "0",
  }),
};
// End of the above code
function KanbanDropDown({ btnName, initialIcon }) {
  const { setGroupValue, setOrderValue, groupValue, orderValue } =
    useContext(GlobalDataContext);
  // Below code is used for mapping the initial Group Options
  const mapInitialGroupOption = () => {
    return groupOptionsData.find((option) =>
      option.value === groupValue ? option : null
    );
  };
  // End of the above code
  // Below code is used for mapping the initial Order Options
  const mapInitialOrderOption = () => {
    return orderOptionsData.find((option) =>
      option.value === orderValue ? option : null
    );
  };
  // End of the above code
  const [showDropdown, setShowDropdown] = useState(false);
  const [groupingValue, setGroupingValue] = useState(mapInitialGroupOption());
  const [orderingValue, setOrderingValue] = useState(mapInitialOrderOption());
  const dropdownRef = useRef(null);

  // Below code is used for toggle the dropdown
  const myFunction = () => {
    setShowDropdown(!showDropdown);
  };
  // End of the above code
  // Below is the code to handle the click outside the dropdown
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setShowDropdown(false);
    }
  };
  // End of the above code
  // Effect to handle click outside
  useEffect(() => {
    if (showDropdown) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDropdown]);
  // Below is the code to set the groupValue and orderValue
  useEffect(() => {
    if (groupingValue) {
      setGroupValue(groupingValue.value);
    }
  }, [groupingValue, setGroupValue]);
  // End of the above code
  // Below is the code to set the orderValue
  useEffect(() => {
    if (orderingValue) {
      setOrderValue(orderingValue.value);
    }
  }, [orderingValue, setOrderValue]);
  // End of the above code
  return (
    <div className="dropdown" ref={dropdownRef}>
      <button onClick={myFunction} className="dropbtn">
        {!!initialIcon ? initialIcon : ""}
        {btnName}
        <DownIcon />
      </button>
      {showDropdown}
      {showDropdown && (
        <div id="myDropdown" className="dropdown-content show">
          <div className="dropdown-content-item">
            <label className="dropdown-label">Grouping</label>
            <Select
              styles={customStyles}
              options={groupOptionsData}
              value={groupingValue}
              defaultValue={mapInitialGroupOption}
              onChange={(selectedOption) => setGroupingValue(selectedOption)}
            />
          </div>
          <div className="dropdown-content-item">
            <label className="dropdown-label">Ordering</label>
            <Select
              styles={customStyles}
              options={orderOptionsData}
              value={orderingValue}
              defaultValue={mapInitialOrderOption}
              onChange={(selectedOption) => setOrderingValue(selectedOption)}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default KanbanDropDown;

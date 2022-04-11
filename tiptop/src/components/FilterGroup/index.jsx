import React from "react";
import "./filterGroup.sass";
import * as Styled from "./filterGroup.styled";

const FilterGroup = ({ filter, setFilter, filters }) => {
  const handleClick = (e) => {
    console.log(e);
    setFilter({ department: e });
  };

  return (
    <div className={"container"}>
      <h2 className="mainFilter">{filter.department.toUpperCase()}</h2>
      <div className="buttonWrapper">
        {filters.map((department) => {
          return (
            department !== filter.department && (
              <Styled.MUIButton onClick={() => handleClick(department)}>
                {department.toUpperCase()}
              </Styled.MUIButton>
            )
          );
        })}
      </div>
    </div>
  );
};

export default FilterGroup;

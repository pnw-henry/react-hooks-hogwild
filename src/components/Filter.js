import React from "react";

function FilterHogs({
  sortBy,
  onChangeSortBy,
  showGreased,
  onChangeShowGreased,
}) {
  function handleChangeSortBy(event) {
    onChangeSortBy(event.target.value);
  }

  function handleToggleGreased(event) {
    onChangeShowGreased(event.target.checked);
  }

  return (
    <div className="container">
      <div className="ui item">
        <label> Sort by</label>
      </div>
      <div className="ui item">
        <select
          className="ui selection"
          name="sort"
          onChange={handleChangeSortBy}
          value={sortBy}
        >
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </div>
      <div className="ui greased">
        <label>Greased Pigs Only? </label>
        <input
          className="greased-toggle"
          checked={showGreased}
          onChange={handleToggleGreased}
          type="checkbox"
        />
      </div>
    </div>
  );
}

export default FilterHogs;

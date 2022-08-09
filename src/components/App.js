import React, { useState } from "react";
import Nav from "./Nav";
import ListHogs from "./HogList";
import FilterHogs from "./Filter";

import hogs from "../porkers_data";

function App() {
  const [showGreased, setShowGreased] = useState(false);
  const [sortBy, setSortBy] = useState("name");

  const hogDisplay = hogs
    .filter((hog) => (showGreased ? hog.greased : true))
    .sort((hog1, hog2) => {
      if (sortBy === "weight") {
        return hog1.weight - hog2.weight;
      } else {
        return hog1.name.localeCompare(hog2.name);
      }
    });

  return (
    <div className="App">
      <Nav />
      <FilterHogs
        showGreased={showGreased}
        onChangeShowGreased={setShowGreased}
        sortBy={sortBy}
        onChangeSortBy={setSortBy}
      />
      <ListHogs hogs={hogDisplay} />
    </div>
  );
}

export default App;

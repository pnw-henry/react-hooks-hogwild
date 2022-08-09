import React from "react";
import HogItem from "./Hog";

function ListHogs({ hogs }) {
  const hogEntries = hogs.map((hog) => {
    return <HogItem key={hog.name} hog={hog} />;
  });

  return <div className=" ui grid container">{hogEntries}</div>;
}

export default ListHogs;

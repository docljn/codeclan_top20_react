import React, {Component} from "react";

const TopTwentyEntry = (props) => {
  console.log(props.children);
  if (!props.title) return null;
  return (
    <li className="entry">
      <h4 className="entryTitle">
        { props.title }
      </h4>
      { props.artist }
    </li>
  );
};

export default TopTwentyEntry;

import React from "react";

const Part = (props) => {
  const { part } = props;
  const { name, exercises } = part;

  return (
    <div>
      <p>{name}</p>
      <p>{exercises}</p>
    </div>
  );
};

export default Part;

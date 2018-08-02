import React from "react";

const todo = props => {
  return (
    <div className="todo">
      {props.text}
      <button>E</button>
      <button>X</button>
    </div>
  );
};

export default todo;

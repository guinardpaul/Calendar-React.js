import React from "react";
import "./styles.css";
import Todo from "./todo";

const day = props => {
  return (
    <td>
      <div className="day">
        <Todo />
      </div>
    </td>
  );
};

export default day;

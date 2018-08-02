import React from "react";
import ReactDOM from "react-dom";
import Day from "./day.js";
import "./styles.css";

function App() {
  const month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const currentMonth = 0;
  const daysInMonth = month[currentMonth];
  let displayDay = [];
  const numberOfWeeks = daysInMonth / 7;
  let remainingDays = daysInMonth;

  for (let i = 0; i < numberOfWeeks; i++) {
    const days = [];
    let daysInWeek;
    if (remainingDays >= 7) {
      daysInWeek = 7;
    } else {
      daysInWeek = remainingDays;
    }
    for (let j = 0; j < daysInWeek; j++) {
      days.push(<Day />);
      remainingDays--;
    }
    displayDay.push(<tr>{days}</tr>);
  }
  return (
    <div className="App">
      <table>
        <thead>
          <tr>
            <th>Lundi</th>
            <th>Mardi</th>
            <th>Mercredi</th>
            <th>Jeudi</th>
            <th>Vendredi</th>
            <th>Samedi</th>
            <th>Dimanche</th>
          </tr>
        </thead>
        <tbody>{displayDay}</tbody>
      </table>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

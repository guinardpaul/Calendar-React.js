import React from "react";
import ReactDOM from "react-dom";
import Day from "./day.js";
import "./styles.css";
import { month } from "./constantUtil";

class App extends React.Component {
  state = {
    currentMonth: 5
  };

  handlePreviousMonth = () => {
    const previousMonth = this.state.currentMonth;
    // if (previousState.currentMonth > 0) {
    this.setState({
      currentMonth: previousMonth - 1
    });
    // }
  };
  handleNextMonth = () => {
    const previousMonth = this.state.currentMonth;
    if (previousState.currentMonth < month.length) {
      this.setState({
        currentMonth: previousMonth + 1
      });
    }
  };

  render() {
    const daysInMonth = month[this.state.currentMonth].numberOfDays;
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
        days.push(<Day key={i + j} todo={{ text: "Todo1" }} />);
        remainingDays--;
      }
      displayDay.push(<tr>{days}</tr>);
    }
    return (
      <div className="App">
        <button onClick={this.handlePreviousMonth}>-</button>
        {month[this.state.currentMonth].literal}
        <button onClick={this.handleNextMonth}>+</button>
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
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

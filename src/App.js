import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [dateList, setGetDay] = useState(new Date());
  const [secoundTime, setSecoundTime] = useState("");
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun ",
    "Jul ",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let day = days[dateList.getDay()];
  let month = months[dateList.getMonth()];
  let date = dateList.getDate();

  useEffect(() => {
    setGetDay(dateList);
    setInterval(() => {
      setSecoundTime(new Date().toLocaleTimeString())
    }, 1000)
  }, []);

  // day

  return (
    <div className="weather_app">
      <div className="weather_container">
        <div className="weather_icon">
          <i className="fas fa-sun" style={{ color: "yellow" }}></i>
        </div>
        <div className="weather_content">
          <div className="country_details">
            <i className="fas fa-street-view"></i>
            <h1 className="cityName">India, In</h1>
          </div>
          <div className="date">
            <h1>
              {day} | {month} {date} | {secoundTime}
            </h1>
          </div>
          <div className="temp">
            <h1>
            {/* {%tempVal%} not Working <sup>o</sup>C */}
            </h1>
            <p>Min 27820 | Max 52841</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

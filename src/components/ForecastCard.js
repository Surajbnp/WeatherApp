import React from "react";
import styles from "../styles/forecast.module.css";

const ForecastCard = ({ date, astro, day }) => {
  const current = new Date(date);
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayNum = daysOfWeek[Number(current.getDay())];
  return (
    <div className={styles.card}>
      <div>{dayNum}</div>
      <div>
        <img src={day.condition.icon} alt="icon"/>
      </div>
      <div>{day.condition.text}</div>
    </div>
  );
};

export default ForecastCard;

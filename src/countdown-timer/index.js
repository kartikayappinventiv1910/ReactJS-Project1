import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import background from "./background.jpg";

const styles = makeStyles({
  mainContainer: {
    backgroundImage: `url(${background})`,
    backgroundSize: "cover",
    backgroundPosition: "center center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    minWidth: "100vw",
  },
  newyear: {
    fontWeight: "600",
    fontSize: "65px",
    marginTop: "220px",
  },
  counterContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  paracontent: {
    fontWeight: "bold",
    fontSize: "6rem",
    lineHeight: "1",
    margin: "1rem 2rem",
  },
  span: {
    fontSize: "35px",
    fontWeight: "600",
  },
});

function CountDownTimer() {
  const classes = styles();
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    setInterval(() => {
      countdown();
    }, 1000);
  }, []);

  const newYears = "1 Jan 2022";

  const countdown = () => {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    setDays(Math.floor(totalSeconds / 3600 / 24));
    setHours(formatTime(Math.floor(totalSeconds / 3600) % 24));
    setMinutes(formatTime(Math.floor(totalSeconds / 60) % 60));
    setSeconds(formatTime(Math.floor(totalSeconds) % 60));

    function formatTime(time) {
      return time < 10 ? `0${time}` : time;
    }
  };
  return (
    <div className={classes.mainContainer}>
      <h1 className={classes.newyear}>New Years Eve</h1>
      <div className={classes.counterContainer}>
        <div>
          <p className={classes.paracontent}>{days}</p>
          <span className={classes.span}>DAYS</span>
        </div>
        <div>
          <p className={classes.paracontent}>{hours}</p>
          <span className={classes.span}>HOURS</span>
        </div>
        <div>
          <p className={classes.paracontent}>{minutes}</p>
          <span className={classes.span}>MINS</span>
        </div>
        <div>
          <p className={classes.paracontent}>{seconds}</p>
          <span className={classes.span}>SECONDS</span>
        </div>
      </div>
    </div>
  );
}

export default CountDownTimer;

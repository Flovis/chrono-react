import React, { useEffect, useState } from "react";
import Button from "./Button";

const Box = () => {
  const [sec, setSeconds] = useState(0);
  const [minute, setMinutes] = useState(0);
  const [hour, setHour] = useState(0);

  let time;
  useEffect(() => {
    time = setInterval(() => {
      setSeconds(sec + 1);
      if (sec === 5) {
        setMinutes(minute + 1);
        setSeconds(0)
      }
      if (minute === 5) {
        setHour(hour + 1);
        setMinutes(0)
      }
    }, 1000);
    return () => clearInterval(time);
  });
  // const startMinuteur = () => {
  //   time = setInterval(() => {
  //     setSeconds((prevSec) => {
  //       if (prevSec === 59) {
  //         setMinutes((prevMinute) => {
  //           if (prevMinute === 59) {
  //             setHour((prevHour) => prevHour + 1);
  //             return 0;
  //           }
  //           return prevMinute + 1;
  //         });
  //         return 0;
  //       }
  //       return prevSec + 1;
  //     });
  //   }, 1000);
  // };

  const pauseMinuteur = () => {
    if (time !== null) {
      clearInterval(time);
    }
  };

  const reloadMinuteur = () => {
    setSeconds(0);
    setMinutes(0);
    setHour(0);
  };

  return (
    <div className="box">
      <div className="time">
        {hour < 10 ? "0" + hour : hour} : {minute < 10 ? "0" + minute : minute}{" "}
        : {sec < 10 ? "0" + sec : sec}
      </div>
      <div className="container-btn">
        <Button
          value={<i class="uil uil-play"></i>}
          // onClick={startMinuteur}
          classcss="rounded-btn"
        />
        <Button
          value={<i class="uil uil-pause"></i>}
          onClick={pauseMinuteur}
          classcss="rounded-btn"
        />
        <Button
          value={<i class="uil uil-redo"></i>}
          onClick={reloadMinuteur}
          classcss="rounded-btn"
        />
      </div>
    </div>
  );
};

export default Box;

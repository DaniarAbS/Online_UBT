import React from 'react'
import { useState, useEffect } from 'react';


const CountdownTimer = ({ initialTime, isActive }) => {
    const [time, setTime] = useState(parseTime(initialTime));
  
    useEffect(() => {
      let timeId;
      if (isActive && time.total <= 0) return;
  
      const timerId = setInterval(() => {
        setTime(calculateTimeDifference(time));
      }, 1000);
  
      return () => clearInterval(timerId);
    }, [isActive, time]);
  
    return (
      <div>
        <span>{formatTimeComponent(time.hours)}:</span>
        <span>{formatTimeComponent(time.minutes)}:</span>
        <span>{formatTimeComponent(time.seconds)}</span>
      </div>
    );
  };
  
  const parseTime = (timeString) => {
    const [hours, minutes, seconds] = timeString.split(':').map(Number);
  
    return {
      total: hours * 3600 + minutes * 60 + seconds,
      hours,
      minutes,
      seconds,
    };
  };
  
  const calculateTimeDifference = (currentTime) => {
    const { total } = currentTime;
    const remainingTime = total - 1;
  
    return parseTime(formatTime(remainingTime));
  };
  
  const formatTimeComponent = (component) => (component < 10 ? `0${component}` : component);
  
  const formatTime = (totalSeconds) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
  
    return `${formatTimeComponent(hours)}:${formatTimeComponent(minutes)}:${formatTimeComponent(seconds)}`;
  };
  
  export default CountdownTimer;
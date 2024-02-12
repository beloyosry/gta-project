import { useState } from "react";

const Clock = () => {
  let time = new Date().toLocaleTimeString([], {
    hour12: false,
    minute: "2-digit",
    hour: "2-digit",
  });
  const [currentTime, setCurrentTime] = useState(time);

  const updateTime = () => {
    let time = new Date().toLocaleTimeString([], {
      hour12: false,
      minute: "2-digit",
      hour: "2-digit",
    });
    if (time !== currentTime) {
      setCurrentTime(time);
    }
  };

  setInterval(updateTime, 1000);

  return (
    <div>
      <h1>{currentTime}</h1>
    </div>
  );
};

export default Clock;

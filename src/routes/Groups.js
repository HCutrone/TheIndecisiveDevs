import React, { useState } from 'react'

let start = new Date();
const end = new Date(2023,1,1,1,1,0,0);

const total = end - start;

function buttonTest()
{
  console.log("click");
}

function CountDown() {
    let s = new Date();
    const e = new Date(2023,1,1,1,1,0,0);
    const [time, setTime] = useState((e - s));
    const [sec, setSec] = useState(Math.floor((time / 1000) % 60));
    const [min, setMin] = useState(Math.floor((time / 1000 / 60) % 60));
    const [hour, setHour] = useState(Math.floor((time / 1000 / 60 / 60) % 24));
    const [days, setDays] = useState(Math.floor((time / 1000 / 60 / 60 / 24) % 365));

    function update() {
        s = new Date();
        setTime(e - s);
        setSec(Math.floor((time / 1000) % 60));
        setMin(Math.floor((time / (1000 * 60)) % 60));
        setHour(Math.floor((time / (1000 * 60 * 60)) % 24));
        setDays(Math.floor((time / (1000 * 60 * 60 * 24)) % 365));
    }

    let intervalId = setInterval(update,1000);

    /*useEffect(() => {
        //s = new Date();
        setTime(e-s);
    });*/

    return (
      <div>
          <h2>Time Remaining: {days}:{(hour<10)?"0"+hour:hour}:{(min<10)?"0"+min:min}:{(sec<10)?"0"+sec:sec}</h2>
      </div>
    );
}

const Groups = () => {

  return (
      <div>
          <h1>Group Name</h1>
          <CountDown></CountDown>
          <h1>Book Title</h1>
          <h2>Book Description</h2>
          <button onClick={buttonTest}>Chat</button>
      </div>
  )
}

export default Groups
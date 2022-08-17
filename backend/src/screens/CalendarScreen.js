import React, { useContext, useEffect } from "react";
import { Context } from "../Context";
import Day from "../components/Day";

function CalendarScreen() {

  const { date, days, setDate } = useContext(Context);

  useEffect(() => {
    setDate(new Date());
  }, []);

  if (days.length < 1) return null;

  const names = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  return (
    <div>
      <div className="calendar borderless day-names">
        {names.map(name => <h5 key={name}>{name}</h5>)}
      </div>
      <div className="calendar">
        {days.map(day => <Day key={day.date} day={day} date={date} setDate={setDate} />)}
      </div>
    </div>
  );
}

export default CalendarScreen;



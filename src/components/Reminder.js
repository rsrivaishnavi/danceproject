import React, { useState } from 'react';

const Reminder = () => {
  const [reminderTime, setReminderTime] = useState(5); // time in seconds

  const setReminder = () => {
    setTimeout(() => {
      alert('Reminder: Your dance class is starting!');
    }, reminderTime * 1000);
  };

  return (
    <div>
      <input
        type="number"
        value={reminderTime}
        onChange={(e) => setReminderTime(e.target.value)}
        placeholder="Reminder time (in seconds)"
      />
      <button onClick={setReminder}>Set Reminder</button>
    </div>
  );
};

export default Reminder;

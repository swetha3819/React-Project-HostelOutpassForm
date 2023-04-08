import React, { useState } from 'react';
import'./HostelOutpassForm.css'
const HostelOutpassForm = () => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [reason, setReason] = useState('');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setIsFormSubmitted(true);
  };

  return (
    <div className="hostel-outpass-form" style={{backgroundColor:"gray"}}>
      {isFormSubmitted ? (
        <div>
          <h3>Outpass Request Submitted!</h3>
          <p>Thank you for submitting your outpass request.</p>
          
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <h3>Hostel Outpass Form</h3>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="time">Time</label>
            <input
              type="time"
              id="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="reason">Reason</label>
            <textarea
              id="reason"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default HostelOutpassForm;
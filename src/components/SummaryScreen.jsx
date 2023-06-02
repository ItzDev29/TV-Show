import React, { useState } from 'react';

const SummaryScreen = ({ show, onBookTicket }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onBookTicket(show.name, name, email);
  };

  return (
    <div className="summary-screen">
      <h1>Show Summary</h1>
      <div className="show-summary">
        <img className="show-image" src={show.image?.medium} alt={show.name} />
        <div dangerouslySetInnerHTML={{ __html: show.summary }} />
        <button onClick={() => onBookTicket(show.name)}>Book Ticket</button>
      </div>
      <div className="form-container">
        <h2>Movie Ticket Booking</h2>
        <div>
          <label htmlFor="movie-name">Movie Name:</label>
          <input type="text" id="movie-name" value={show.name} readOnly />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-input">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
          <div className="form-input">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <button type="submit" className="form-submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default SummaryScreen;

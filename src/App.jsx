import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ShowListScreen from './components/ShowListScreen';
import SummaryScreen from './components/SummaryScreen';
import './App.css';

const App = () => {

  const [shows, setShows] = useState([]);
  const [selectedShow, setSelectedShow] = useState(null);

  useEffect(() => {
    const fetchShows = async () => {
      try {
        const response = await axios.get('https://api.tvmaze.com/search/shows?q=all');
        setShows(response.data.map((entry) => entry.show));
      } catch (error) {
        console.error('Error fetching shows:', error);
      }
    };

    fetchShows();
  }, []);

  const handleShowSelected = (show) => {
    setSelectedShow(show);
  };

  const handleBookTicket = (movieName, name, email) => {
    // Store user details in local storage
    localStorage.setItem('name', name);
    localStorage.setItem('email', email);
    alert(`Ticket booked for ${name} (${email}) for the show "${movieName}"`);
  };

  return (
    <div className="app">
      {!selectedShow && (
        <ShowListScreen shows={shows} onShowSelected={handleShowSelected} />
      )}
      {selectedShow && (
        <SummaryScreen show={selectedShow} onBookTicket={handleBookTicket} />
      )}
    </div>
  );
};

export default App;

import React from 'react';
import ShowCard from './ShowCard';
`import './ShowListScreen.css';`

const ShowListScreen = ({ shows, onShowSelected }) => {
  return (
    <div className="show-list-screen">
      {shows.map((show) => (
        <ShowCard
          key={show.id}
          show={show}
          onShowSelected={onShowSelected}
        />
      ))}
    </div>
  );
};

export default ShowListScreen;

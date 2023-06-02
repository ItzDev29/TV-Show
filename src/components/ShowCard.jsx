import React from 'react';

const ShowCard = ({ show, onShowSelected }) => {
  const handleSelectShow = () => {
    onShowSelected(show);
  };

  return (
    <div className="show-card" onClick={handleSelectShow}>
      <img className="show-image" src={show.image?.medium} alt={show.name} />
      <div className="show-details">
        <h2>{show.name}</h2>
      </div>
    </div>
  );
};

export default ShowCard;

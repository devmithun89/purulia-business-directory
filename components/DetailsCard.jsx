import React from 'react';

const DetailsCard = ({ backgroundImage, businessName, description }) => {
  const cardStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: '20px',
    color: '#fff',
    minHeight: '500px', // Adjusted for responsiveness
  };

  const contentStyle = {
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
    padding: '20px',
    borderRadius: '10px',
    marginTop: 'auto', // Push content to bottom on smaller screens
  };

  const buttonStyle = {
    padding: '10px 20px',
    cursor: 'pointer',
    border: 'none',
    borderRadius: '5px',
    fontWeight: 'semibold',
  };

  return (
    <div className="relative overflow-hidden" style={cardStyle}>
      <div className="absolute inset-0 opacity-50"></div>
      <div className="relative z-10" style={contentStyle}>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">{businessName}</h1>
        <p className="mt-4 text-lg">{description}</p>
        <div className="mt-6 flex sm:flex-row gap-2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out mb-2 sm:mr-4 sm:mb-0" style={buttonStyle}>Visit Website</button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out mb-2 sm:mr-4 sm:mb-0" style={buttonStyle}>Get Directions</button>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;

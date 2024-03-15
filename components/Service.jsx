import React from 'react';

const Service = ({ icon: Icon, serviceName, description }) => {
  return (
    <div className="max-w-xs sm:max-w-md lg:max-w-lg xl:max-w-xl w-[40]">
      <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center justify-center space-y-2">
        <Icon className="text-4xl text-gray-700" />
        <h3 className="text-xl font-semibold text-center">{serviceName}</h3>
        <p className="text-sm text-gray-600 text-center">{description}</p>
      </div>
    </div>
  );
};

export default Service;

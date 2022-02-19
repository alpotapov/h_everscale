import React from 'react';

import './Spinner.css';

const Spinner = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-32 w-32" />
    </div>
  );
};

export default Spinner;

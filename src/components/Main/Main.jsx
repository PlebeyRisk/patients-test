import React from 'react';
import './Main.scss';

import PatientInfo from '../PatientInfo/PatientInfo';
import PatientsList from '../PatientsList/PatientsList';

const Main = () => {
  return (
    <div className="main">
      <PatientInfo />
      <PatientsList />
    </div>
  );
};

export default Main;

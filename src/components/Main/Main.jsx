import React, { useState } from 'react';
import './Main.scss';

import TabViewContainer from '../TabView/TabViewContainer';
import PatientInfo from '../PatientInfo/PatientInfo';

const Main = () => {
  const [activePatient, setActivePatient] = useState(null);

  return (
    <div className="main">
      <PatientInfo data={activePatient} />
      <TabViewContainer activePatient={activePatient} setActivePatient={setActivePatient} />
    </div>
  );
};

export default Main;

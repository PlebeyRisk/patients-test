import React from 'react';
import './Main.scss';

import TabViewContainer from '../TabView/TabViewContainer';
import PatientInfoContainer from '../PatientInfo/PatientInfoContainer';

const Main = () => {
  return (
    <div className="main">
      <PatientInfoContainer />
      <TabViewContainer />
    </div>
  );
};

export default Main;

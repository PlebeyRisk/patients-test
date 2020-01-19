import React from 'react';
import './TabView.scss';

import PatientsTable from '../PatientsTable/PatientsTable';
import Tabs from '../Tabs/Tabs';

const TabView = ({ present, quitting, activeTabIndex, tableHeaderData, setActivePatient, activePatient, ...props }) => {
  const havePresent = present !== null && present !== undefined;
  const haveQuitting = quitting !== null && quitting !== undefined;

  return (
    <div className="tabView">
      <Tabs
        {...props}
        activeTabIndex={activeTabIndex}
        presentCount={havePresent ? present.length : 0}
        quittingCount={haveQuitting ? quitting.length : 0}
      />
      <PatientsTable
        present={present}
        quitting={quitting}
        tableHeaderData={tableHeaderData}
        activeTabIndex={activeTabIndex}
        activePatient={activePatient}
        setActivePatient={setActivePatient}
      />
    </div>
  );
};

export default TabView;

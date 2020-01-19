import React, { useState, useEffect } from 'react';

import TabView from './TabView';

import api from '../../api/api';
import { tabsData, tableHeaderData } from '../../constants';

const TabViewContainer = ({ setActivePatient, activePatient }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const [present, setPresent] = useState(null);
  const [quitting, setQuitting] = useState(null);

  const loadPresent = async () => {
    let data = await api.getPresent();

    if (data) {
      setPresent(data);
    }
  };

  const loadQuitting = async () => {
    let data = await api.getQuitting();

    if (data) {
      setQuitting(data);
    }
  };

  useEffect(() => {
    loadPresent();
    loadQuitting();
  }, []);

  return (
    <TabView
      tabsData={tabsData}
      tableHeaderData={tableHeaderData}
      activeTabIndex={activeTabIndex}
      setActiveTabIndex={setActiveTabIndex}
      present={present}
      quitting={quitting}
      activePatient={activePatient}
      setActivePatient={setActivePatient}
    />
  );
};

export default TabViewContainer;

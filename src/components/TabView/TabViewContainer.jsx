import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import TabView from './TabView';

import { tabsData, tableHeaderData } from '../../constants';
import appSelectors from '../../redux/selectors/appSelectors';
import { fetchPresentPatients, fetchQuittingPatients } from '../../redux/thunks';
import { setActivePatient } from '../../redux/actions';

const TabViewContainer = ({
  fetchPresentPatients,
  fetchQuittingPatients,
  setActivePatient,
  activePatient,
  present,
  quitting,
}) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  useEffect(() => {
    fetchPresentPatients();
    fetchQuittingPatients();
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

let mapStateToProps = state => {
  const { getActivePatient, getPresentPatients, getQuittingPatients } = appSelectors;
  return {
    activePatient: getActivePatient(state),
    present: getPresentPatients(state),
    quitting: getQuittingPatients(state),
  };
};

let mapDispatchToProps = {
  fetchPresentPatients,
  fetchQuittingPatients,
  setActivePatient,
};

export default connect(mapStateToProps, mapDispatchToProps)(TabViewContainer);

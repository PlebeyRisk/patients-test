import React from 'react';
import { connect } from 'react-redux';

import PatientInfo from './PatientInfo';

import appSelectors from '../../redux/selectors/appSelectors';

const PatientInfoContainer = ({ activePatient, setCollapseMode, collapse = false, hidden = false }) => {
  return <PatientInfo data={activePatient} collapse={collapse} setCollapseMode={setCollapseMode} hidden={hidden} />;
};

let mapStateToProps = state => {
  const { getActivePatient } = appSelectors;
  return {
    activePatient: getActivePatient(state),
  };
};

export default connect(mapStateToProps)(PatientInfoContainer);

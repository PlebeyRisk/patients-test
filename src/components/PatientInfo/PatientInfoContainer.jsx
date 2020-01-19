import React, { useState } from 'react';
import { connect } from 'react-redux';

import PatientInfo from './PatientInfo';

import appSelectors from '../../redux/selectors/appSelectors';

const PatientInfoContainer = ({ activePatient }) => {
  const [collapseMode, setCollapseMode] = useState(false);

  return <PatientInfo data={activePatient} collapseMode={collapseMode} setCollapseMode={setCollapseMode} />;
};

let mapStateToProps = state => {
  const { getActivePatient } = appSelectors;
  return {
    activePatient: getActivePatient(state),
  };
};

export default connect(mapStateToProps)(PatientInfoContainer);

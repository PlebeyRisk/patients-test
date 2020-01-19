import React from 'react';
import './PatientInfo.scss';

import { getFullYear } from '../../utils';

const PatientInfo = ({ data, setCollapseMode, collapseMode }) => {
  const toggleCollapseMode = () => {
    setCollapseMode(!collapseMode);
  };

  let fio = null;
  let age = null;
  let diagnosis = null;

  if (data) {
    fio = `${data.lastName} ${data.firstName} ${data.patrName}`;
    age = getFullYear(data.birthDate);
    diagnosis = data.diagnosis;
  }

  return (
    <div className={`patientInfo${collapseMode ? ' _collapse' : ''}`}>
      <div className="patientInfo-header">
        <span className="patientInfo__title">Информация о пациенте</span>
        <button className="resizeButton" onClick={toggleCollapseMode}>
          <span className="resizeButton__icon"></span>
        </button>
      </div>
      <div className="patientInfo-body">
        <InfoItem name="ФИО" value={fio} />
        <InfoItem name="Возраст" value={age} />
        <InfoItem name="Диагноз" value={diagnosis} />
      </div>
    </div>
  );
};

const InfoItem = ({ name, value }) => {
  return (
    <div className="infoItem">
      <span className="infoItem__name">{name}</span>
      <div className="infoItem__value">{value}</div>
    </div>
  );
};

export default PatientInfo;

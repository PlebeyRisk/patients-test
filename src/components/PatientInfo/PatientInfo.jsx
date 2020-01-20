import React from 'react';
import './PatientInfo.scss';

import { getFullYear } from '../../utils';

const PatientInfo = ({ data, hidden = false }) => {
  let fio = null;
  let age = null;
  let diagnosis = null;

  if (data) {
    fio = `${data.lastName} ${data.firstName} ${data.patrName}`;
    age = getFullYear(data.birthDate);
    diagnosis = data.diagnosis;
  }

  return (
    <div className="patientInfo" style={hidden ? { display: 'none' } : {}}>
      <div className="patientInfo-header">
        <span className="patientInfo__title">Информация о пациенте</span>
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

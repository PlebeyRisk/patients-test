import React from 'react';
import './PatientInfo.scss';

const PatientInfo = () => {
  return (
    <div className="patientInfo">
      <div className="header">
        <span>Информация о пациенте</span>
        <button className="resizeButton">
          <span className="resizeButton__icon"></span>
        </button>
      </div>
      <div className="body">
        <InfoItem name="ФИО" value="Степанов Игорь Васильевич" />
        <InfoItem name="Возраст" value="Игорь Васильевич" />
        <InfoItem name="Диагноз" value="Васильевич" />
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

import React from 'react';
import './PatientsTable.scss';

const PatientsTable = ({ present, quitting, tableHeaderData, activeTabIndex, setActivePatient, activePatient }) => {
  let data;
  let headerData;
  switch (activeTabIndex) {
    case 0:
      data = present;
      headerData = tableHeaderData[0];
      break;
    case 1:
      data = quitting;
      headerData = tableHeaderData[1];
      break;
    default:
      data = null;
      headerData = null;
  }

  if (!data || data === null || headerData === null) {
    return <></>;
  }

  return (
    <div className="patients-table">
      <table className="table">
        <Header data={headerData} />
        <Body
          data={data}
          headerData={headerData}
          activeTabIndex={activeTabIndex}
          activePatient={activePatient}
          setActivePatient={setActivePatient}
        />
      </table>
    </div>
  );
};

const Header = ({ data }) => {
  return (
    <thead className="table-header">
      <tr>
        {data.data.map(item => (
          <th key={item.id}>{item.name}</th>
        ))}
      </tr>
    </thead>
  );
};

const Body = ({ data, headerData, activeTabIndex, setActivePatient, activePatient }) => {
  return (
    <tbody className="body">
      {data.map((patient, patientIndex) => {
        const isActive = activePatient === patient;
        return (
          <tr
            key={patient.historyNumber}
            className={isActive ? 'row_active' : ''}
            onClick={() => setActivePatient(patient)}
          >
            {headerData.data.map((headerItem, columnIndex) => {
              let cellValue;
              switch (columnIndex) {
                case 0:
                  cellValue = patient.historyNumber;
                  break;
                case 1:
                  cellValue = `${patient.lastName} ${patient.firstName} ${patient.patrName}`;
                  break;
                case 2:
                  switch (activeTabIndex) {
                    case 0:
                      cellValue = patient.bedNumber;
                      break;
                    case 1:
                      cellValue = patient.cause;
                      break;
                    default:
                      cellValue = 'null';
                  }
                  break;
                default:
                  cellValue = 'null';
              }

              return <td key={columnIndex}>{cellValue}</td>;
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default PatientsTable;

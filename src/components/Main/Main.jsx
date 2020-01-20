import React from 'react';
import './Main.scss';

import TabViewContainer from '../TabView/TabViewContainer';
import PatientInfoContainer from '../PatientInfo/PatientInfoContainer';

const Main = ({ leftElemRef, leftElemWidth, collapseMode, setCollapseMode, onMouseDown, onMouseUp, onMouseMove }) => {
  const toggleCollapseMode = () => {
    setCollapseMode(!collapseMode);
  };

  return (
    <div className="main" onMouseUp={onMouseUp} onMouseMove={onMouseMove}>
      <div
        ref={leftElemRef}
        className={`leftBlock${collapseMode ? ' _collapse' : ''}`}
        style={!leftElemWidth ? {} : { maxWidth: leftElemWidth + 'px' }}
      >
        <PatientInfoContainer setCollapseMode={setCollapseMode} collapse={collapseMode} hidden={collapseMode} />
        <button className="collapseButton" onClick={toggleCollapseMode}>
          <span className="collapseButton__icon"></span>
        </button>
      </div>
      <button className="slider" onMouseDown={onMouseDown}>
        <span>...</span>
      </button>
      <div className="rightBlock">
        <TabViewContainer />
      </div>
    </div>
  );
};

export default Main;

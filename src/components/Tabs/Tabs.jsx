import React from 'react';
import './Tabs.scss';

const Tabs = ({ tabsData, activeTabIndex, setActiveTabIndex, presentCount, quittingCount }) => {
  const changeTab = newIndex => {
    setActiveTabIndex(newIndex);
  };

  let tabs = tabsData.map((item, index) => {
    let isActive = index === activeTabIndex;

    let countPatients = 0;
    switch (index) {
      case 1:
        countPatients = quittingCount;
        break;
      default:
        countPatients = presentCount;
    }

    return (
      <button key={item.id} className={`tabItem ${isActive ? 'tabItem_active' : ''}`} onClick={() => changeTab(index)}>
        {item.name}({countPatients})
      </button>
    );
  });

  return <div className="tabs">{tabs}</div>;
};

export default Tabs;

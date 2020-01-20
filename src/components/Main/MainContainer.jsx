import React, { useRef, useEffect, useState } from 'react';
import './Main.scss';

import Main from './Main';

const MainContainer = () => {
  const [startLeftElemWidth, setStartLeftElemWidth] = useState(0);
  const [leftElemWidth, setLeftElemWidth] = useState(0);
  const [oldMouseX, setOldMouseX] = useState(0);
  const [collapseMode, setCollapseMode] = useState(false);

  const leftElem = useRef(null);

  useEffect(() => {
    setLeftElemWidth(leftElem.current.offsetWidth);
  }, []);

  const collapseModeHandler = (collapse = false) => {
    if (!collapse) {
      if (leftElemWidth < 250) {
        setLeftElemWidth(250);
      }

      setCollapseMode(false);
      return;
    }

    setCollapseMode(true);
  };

  const onMouseDown = e => {
    setStartLeftElemWidth(leftElem.current.offsetWidth);
    setOldMouseX(e.pageX);
    setCollapseMode(false);
  };

  const onMouseUp = () => {
    if (leftElemWidth < 250) {
      collapseModeHandler(true);
    }
    setStartLeftElemWidth(0);
  };

  const onMouseMove = e => {
    if (!startLeftElemWidth) return;

    if (leftElemWidth < 250 && oldMouseX > e.pageX) {
      setCollapseMode(true);
    }

    setLeftElemWidth(startLeftElemWidth - (oldMouseX - e.pageX));
  };

  return (
    <Main
      leftElemRef={leftElem}
      leftElemWidth={leftElemWidth}
      collapseMode={collapseMode}
      setCollapseMode={collapseModeHandler}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
    />
  );
};

export default MainContainer;

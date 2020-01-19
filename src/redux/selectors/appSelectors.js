const getActivePatient = (state) => {
  return state.app.activePatient;
};

const getCollapseMode = (state) => {
  return state.app.collapseMode;
};

const getPresentPatients = (state) => {
  return state.app.presentPatients;
};

const getQuittingPatients = (state) => {
  return state.app.quittingPatients;
};

const appSelectors = {
  getActivePatient,
  getCollapseMode,
  getPresentPatients,
  getQuittingPatients
};

export default appSelectors;
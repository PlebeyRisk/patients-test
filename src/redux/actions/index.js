import {
  SET_ACTIVE_PATIENT,
  SET_COLLAPSE_MODE,
  SET_PRESENT_PATIENTS,
  SET_QUITTING_PATIENTS } from './actionTypes';

export const setActivePatient = (patient) => ({type: SET_ACTIVE_PATIENT, patient});
export const setCollapseMode = (mode) => ({type: SET_COLLAPSE_MODE, mode});
export const setPresentPatients = (present) => ({type: SET_PRESENT_PATIENTS, present});
export const setQuittingPatients = (quitting) => ({type: SET_QUITTING_PATIENTS, quitting});


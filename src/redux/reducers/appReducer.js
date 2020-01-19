import { SET_ACTIVE_PATIENT, SET_COLLAPSE_MODE, SET_PRESENT_PATIENTS,
        SET_QUITTING_PATIENTS } from "../actions/actionTypes";

const initialState = {
  activePatient: null,
  collapseMode: false,
  presentPatients: null,
  quittingPatients: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ACTIVE_PATIENT:
      return {...state,
        activePatient: action.patient
      };
    case SET_COLLAPSE_MODE:
      return {...state,
        collapseMode: action.mode
      };
    case SET_PRESENT_PATIENTS:
      return {...state,
        presentPatients: action.present
      };
    case SET_QUITTING_PATIENTS:
      return {...state,
        quittingPatients: action.quitting
      };
    default:
      return state;
  }
};
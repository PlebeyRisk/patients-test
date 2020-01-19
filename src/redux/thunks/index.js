import api from "../../api/api";
import { setPresentPatients, setQuittingPatients } from "../actions";

export const fetchPresentPatients = () => async dispatch => {
  const response = await api.getPresent();

  if (response) {
    dispatch(setPresentPatients(response));
  }
};

export const fetchQuittingPatients = () => async dispatch => {
  const response = await api.getQuitting();

  if (response) {
    dispatch(setQuittingPatients(response));
  }
};


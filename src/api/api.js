import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://my-json-server.typicode.com/PlebeyRisk/test-server/',
});

const getPresent = () => {
  return instance.get(`present`).then(
    response => response.data,
    error => console.log('error fetching getPresent(): ' + error),
  );
};

const getQuitting = () => {
  return instance.get(`quitting`).then(
    response => response.data,
    error => console.log('error fetching getQuitting(): ' + error),
  );
};

export default {
  getQuitting,
  getPresent
};
import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://jsfiddle.net/echo/json/',
});

const getUsers = () => {
  return instance.get(``).then(
    response => response.data,
    error => console.log('error fetching getUsers(): ' + error),
  );
};

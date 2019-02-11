import axios from 'axios';

const instance = axios.create({
  timeout: 1000,
  headers: {Authorization: 'Bearer ' + 'MWhEAdkHKYdscen_4cxR'},
});

export default instance;

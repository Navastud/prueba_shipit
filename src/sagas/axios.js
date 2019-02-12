import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://api.shipit.cl/v/',
  timeout: 1000,
  headers: {
    'content-type': 'application/json',
    'x-shipit-email': 'prueba_front@shipit.cl',
    'x-shipit-access-token': 'MWhEAdkHKYdscen_4cxR',
    accept: 'application/vnd.shipit.v2',
  },
});

export default instance;

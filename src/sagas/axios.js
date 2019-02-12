import axios from 'axios';

const instance = axios.create({
  async: true,
  crossDomain: true,
  withCredentials: true,
  headers: {
    'cache-control': 'no-cache',
    Accept: 'application/vnd.shipit.v2',
    'x-shipit-access-token': 'MWhEAdkHKYdscen_4cxR',
    'x-shipit-email': 'prueba_front@shipit.cl',
    'content-type': 'application/json',
    Authorization: 'AUTH_TOKEN',
  },
  'Access-Control-Allow-Origin': '*',
});

export default instance;

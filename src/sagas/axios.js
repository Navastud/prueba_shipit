import axios from 'axios';

const instance = axios.create({
  headers: {
    'Cache-Control': 'no-cache, no-store, must-revalidate',
    Accept: 'application/vnd.shipit.v2',
    'x-shipit-access-token': 'MWhEAdkHKYdscen_4cxR',
    'x-shipit-email': 'prueba_front@shipit.cl',
    'content-type': 'application/json',
  },
});

export default instance;

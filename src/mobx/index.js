import Auth from './auth';
import { API_ENDPOINT } from '../config';

const authStore = new Auth({ endpoint: API_ENDPOINT });

export {
  authStore
};

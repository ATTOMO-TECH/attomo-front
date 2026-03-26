import axios from 'axios';
import { API_URL } from '../lib/restClient';

const sendNewsletter = (email: any) =>
  axios.post(`${API_URL}/subscribers`, email);

export { sendNewsletter };

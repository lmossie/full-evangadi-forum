import axios from 'axios';

const api = axios.create({
  baseURL: 'https://evangadi-forum-backend-iyde.onrender.com/api',
  
});


export default api;

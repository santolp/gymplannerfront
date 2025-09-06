import axios from 'axios';



const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000' // <-- usar HTTP
});

api.interceptors.request.use(cfg => {
  const tok = localStorage.getItem('token');
  if (tok) cfg.headers.Authorization = `Bearer ${tok}`;
  return cfg;
});

export default api;

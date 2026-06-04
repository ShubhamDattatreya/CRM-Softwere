import axios from "axios";
const BASE_URL = "https://crm-softwere.onrender.com";

export const UserFeatch = () => {
  return axios.get(`${BASE_URL}/admin/adminFetch`);
};
export const Email = (email, password) => {
  return axios.post(`${BASE_URL}/api/email/send-mail`, { email, password });
};
export const adminBlock = (id) => {
  return axios.put(`${BASE_URL}/admin/block/${id}`);
};


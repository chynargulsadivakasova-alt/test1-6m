import axios from 'axios';
const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

export const fetchUsers = async () => {
  const { data } = await axios.get(BASE_URL);
  return data;
};

export const fetchUserById = async (id) => {
  const { data } = await axios.get(`${BASE_URL}/${id}`);
  return data;
};
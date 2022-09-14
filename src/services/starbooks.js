import axios from 'axios';

const BASE_URL = 'http://localhost:5000'

function createHeaders (token) {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    }
  };
  return config;
}

function signIn (body) {
  const promise = axios.post(`${BASE_URL}/sign-in`, body)
  return promise;
}

export {
  signIn
}
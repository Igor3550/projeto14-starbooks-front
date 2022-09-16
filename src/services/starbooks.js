import axios from "axios";

const BASE_URL = "http://localhost:5000";
//const BASE_URL = "https://projeto14-starbooks-back.herokuapp.com";

function createHeaders(token) {
	const config = {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};
	return config;
}

function signIn(body) {
	const promise = axios.post(`${BASE_URL}/sign-in`, body);
	return promise;
}

function signUp(body) {
	const promise = axios.post(`${BASE_URL}/sign-up`, body);
	return promise;
}

function getBooks(body) {
	const promise = axios.get(`${BASE_URL}/books`, body);
	return promise;
}

function getBook(idBook) {
	const promise = axios.get(`${BASE_URL}/books?id=${idBook}`);
	return promise;
}

export { signIn, signUp, getBooks, getBook };

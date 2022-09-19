import axios from "axios";

//const BASE_URL = "http://localhost:5000";
const BASE_URL = "https://projeto14-starbooks-back.herokuapp.com";

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

function getUserCart(token) {
	const config = createHeaders(token);
	const promise = axios.get(`${BASE_URL}/cart`, config);
	return promise;
}

function addItemToCart(token, idBook) {
	const config = createHeaders(token);
	const promise = axios.post(`${BASE_URL}/cart/add/${idBook}`, {}, config);
	return promise;
}

function deleteCartItem(token, idBook) {
	const config = createHeaders(token);
	const promise = axios.delete(`${BASE_URL}/cart/delete/${idBook}`, config);
	return promise;
}

function addPurchase(token, body) {
	const config = createHeaders(token);
	const promise = axios.post(`${BASE_URL}/purchases`, body, config);
	return promise;
}

function addFavorite(token, idBook) {
	const config = createHeaders(token);
	const promise = axios.post(`${BASE_URL}/favorites/${idBook}`, {}, config);
	return promise;
}

function getFavorites(token) {
	const config = createHeaders(token);
	const promise = axios.get(`${BASE_URL}/favorites`, config);
	return promise;
}

export {
	signIn,
	signUp,
	getBooks,
	getBook,
	getUserCart,
	addItemToCart,
	deleteCartItem,
	addPurchase,
	getFavorites,
	addFavorite,
};

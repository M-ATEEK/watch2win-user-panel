const setToken = (token) => {
	localStorage.setItem("token", token);
};

const getToken = () => {
	return localStorage.getItem("token");
};

const clearToken = () => {
	return localStorage.clear("token");
};

const isAuthenticated = () => {
	if (getToken()) {
		return true;
	}

	return false;
};

export default {
	setToken: setToken,
	getToken: getToken,
	clearToken: clearToken,
	isAuthenticated: isAuthenticated,
};

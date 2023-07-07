const BASE_URL = "https://jsonplaceholder.typicode.com";

const ENDPOINTS = {
	USERS: "users",
	ALBUMS: "albums",
	POSTS: "posts",
};

export const getUserList = async () => {
	const url = `${BASE_URL}/${ENDPOINTS.USERS}`;
	try {
		const response = await fetch(url);
		return response.json();
	} catch (error) {
		console.error("Error fetching data:", error);
		throw error;
	}
};

export const getAlbumsByUserId = async userID => {
	const url = `${BASE_URL}/${ENDPOINTS.ALBUMS}?userId=${userID}`;
	try {
		const response = await fetch(url);
		return response.json();
	} catch (error) {
		console.error("Error fetching data:", error);
		throw error;
	}
};

export const getPostsByUserId = async userID => {
	const url = `${BASE_URL}/${ENDPOINTS.POSTS}?userId=${userID}`;

	try {
		const response = await fetch(url);
		return response.json();
	} catch (error) {
		console.error("Error fetching data:", error);
		throw error;
	}
};

export const getIdList = async resource => {
	let url = "";
	if (resource === "post") {
		url = `${BASE_URL}/${ENDPOINTS.POSTS}`;
	} else if (resource === "album") {
		url = `${BASE_URL}/${ENDPOINTS.ALBUMS}`;
	}
	try {
		const response = await fetch(url).then(res => res.json());
		const idList = response?.map(item => {
			return {
				params: {
					id: item.id.toString(),
				},
			};
		});

		return idList;
	} catch (error) {
		console.error("Error fetching data:", error);
		throw error;
	}
};

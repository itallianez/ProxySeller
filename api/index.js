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

//  {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     }
//   },

// post
// {
//     "userId": 1,
//     "id": 1,
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
//   },

// album
//  {
//     "userId": 1,
//     "id": 1,
//     "title": "quidem molestiae enim"
//   },

import { BASE_URL, HOTELS } from "../constants/baseUrl";
import axios from "axios";

// Strapi has updated the way they handle image to entry relation, therefor we need to send in an updated value for the image url as these do not auto connect.
export const updateHotelImageUrl = async (id, url, auth, data) => {
	console.log(url);
	// parse old data
	const newData = JSON.parse(data);
	// attach url to property hotel_image
	newData.data.hotel_image = url;
	console.log(url);
	// Create a new config
	const CONFIG = {
		method: "PUT",
		url: BASE_URL + HOTELS + "/" + id,
		data: JSON.stringify(newData),
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${auth.jwt}`,
		},
	};
	if (url !== "") {
		try {
			const response = await axios(CONFIG);
			console.log(response);
		} catch (error) {
			console.log(error);
		}
	}
};

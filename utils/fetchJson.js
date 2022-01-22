export default async function fetchJson(...args) {
	try {
		const response = await fetch(...args);

		// Deconstruct Neon API response
		if (response.status === 503) {
			return JSON.stringify({ status: 503, errorMessage: response.statusText });
		}

		// if the server replies, there's always some data in json
		// if there's a network error, it will throw at the previous line
		const data = await response.json();

		return JSON.stringify({ status: response.status, data: data });
	} catch (error) {
		if (!error.data) {
			error.data = { message: error.message };
		}
		throw error;
	}
}
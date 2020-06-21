/**
 * 处理请求
 */

const headers = new Headers({
	Accept: "application/json",
	"Content-Type": "application/json",
	mode: "cors",
});

const base = {
	bash: "http://101.132.100.188:8080", // ALTER
};

const handleResponse = (response) => {
	if (response.status < 500) {
		return response.json();
	} else {
		console.error(`Request failed. Message = ${response.statusText}`);
		return { error: { msg: "Server error." } };
	}
};

const post = (url, data) =>
	fetch(base + url, {
		method: "POST",
		body: JSON.stringify(data),
		credentials: "include",
		headers: headers,
	})
		.then((response) => handleResponse(response))
		.catch((err) => {
			console.error(`Request failed. Message = ${err}`);
			return { error: { msg: "Request failed." } };
		});

export { post };
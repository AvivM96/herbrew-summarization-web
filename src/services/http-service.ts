const BASE_URL = "http://localhost:5000";

class HttpService {
	private static baseUrlByEnv: string = '';

	public static setBaseUrlByEnv = (url: string) => (HttpService.baseUrlByEnv = url);

	static async get(url: string) {
		const response = await fetch(`${this.baseUrl}${url}`, {
			credentials: 'include'
		});

		if (!response.ok) {
			throw new Error(`Failed to get ${url}`);
		}

		const data = await response.text();

		try {
			return JSON.parse(data);
		} catch (e) {
			return data;
		}
	}

	static async patch(url: string, body: object) {
		const response = await fetch(`${this.baseUrl}${url}`, {
			method: 'PATCH',
			credentials: 'include',
			headers: {
				'Content-Type': 'application/json'
			},
			redirect: 'follow',
			referrerPolicy: 'no-referrer',
			body: JSON.stringify(body)
		});

		if (!response.ok) {
			throw new Error(`Failed to ost ${url}`);
		}

		return response.json();
	}

	static async post(url: string, body: object | FormData, json: boolean = true) {
		let options: any = {
			method: 'POST',
			// credentials: 'include',
			redirect: 'follow',
			referrerPolicy: 'no-referrer',
			body: json ? JSON.stringify(body) : (body as FormData)
		};

		if (json) {
			options = {
				...options,
				headers: {
					'Content-Type': 'application/json'
				}
			};
		}

		const response = await fetch(`${this.baseUrl}${url}`, options);

		if (!response.ok) {
			throw new Error(`Failed to post ${url}`);
		}

		return response.json();
	}

	static async delete(url: string) {
		const response = await fetch(`${this.baseUrl}${url}`, {
			method: 'DELETE',
			credentials: 'include',
			redirect: 'follow',
			referrerPolicy: 'no-referrer'
		});

		if (!response.ok) {
			throw new Error(`Failed to delete ${url}`);
		}

		const data = await response.text();

		try {
			return JSON.parse(data);
		} catch (e) {
			return data;
		}
	}

	private static get baseUrl(): string {
		return BASE_URL;
	}
}

export default HttpService;

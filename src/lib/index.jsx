export default {
	toBase64(data) {
		return btoa(encodeURIComponent(escape(JSON.stringify(data))));
	},
	toJson(str) {
		try {
			return JSON.parse(unescape(decodeURIComponent(window.atob(str))));
		} catch {
			return 'format error';
		}
	},
};

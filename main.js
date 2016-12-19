function parseTwitterDate(tdate) {
	var system_date = new Date(tdate * 1000);
	var user_date = new Date();
	if (K.ie) {
		system_date = Date.parse(tdate.replace(/( \+)/, ' UTC$1'))
	}

	if (ui_display_ago_time) {
		var diff = Math.floor((user_date - system_date) / 1000);
		if (diff <= 1) {
			return "just now";
		}
		if (diff < 20) {
			return diff + " seconds ago";
		}
		if (diff < 40) {
			return "half a minute ago";
		}
		if (diff < 60) {
			return "about a minute ago";
		}
		if (diff <= 90) {
			return "one minute ago";
		}
		if (diff <= 3540) {
			return Math.round(diff / 60) + " minutes ago";
		}
		if (diff <= 5400) {
			return "1 hour ago";
		}
		if (diff <= 86400) {
			return Math.round(diff / 3600) + " hours ago";
		}
		if (diff <= 129600) {
			return "1 day ago";
		}
		if (diff < 604800) {
			return Math.round(diff / 86400) + " days ago";
		}
		if (diff <= 777600) {
			return "1 week ago";
		}
		if (diff <= 2592000) {
			return "1 month ago";
		}
		if (diff <= 28512000) {
			return Math.round(diff / 2592000) + " months ago";
		}
		if (diff <= 31104000) {
			return "1 year ago";
		}
		return Math.round(diff / 31104000) + " years ago";
	} else {
		return system_date;
	}
}

var K = function() {
	var a = navigator.userAgent;
	return {
		ie: a.match(/MSIE\s([^;]*)/)
	}
}();

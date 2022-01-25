if (window.netlifyIdentity) {
	window.netlifyIdentity.on("init", user => {
		if (!user) {
			window.netlifyIdentity.on("login", () => {
				document.location.href = "/cms/";
			});
		} else if (user) {
			window.netlifyIdentity.on("close", () => {
				document.location.href = "/cms/";
			});
		}
	});
}

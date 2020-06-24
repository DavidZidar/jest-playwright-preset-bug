module.exports = {
	launchOptions: {
		headless: process.env.HEADLESS === undefined || process.env.HEADLESS === "true"
	}
};

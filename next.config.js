const isProd = process.env.NODE_ENV === "production";

module.exports = {
	basePath: isProd ? "/ProxySeller" : "",
	assetPrefix: isProd ? "https://itallianez.github.io/ProxySeller/" : "",
};

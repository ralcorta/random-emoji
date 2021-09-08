module.exports = {
	publicPath: process.env.VUE_APP_PUBLIC_PATH ?? (process.env.NODE_ENV === 'production' ? '/random-emoji/' : '/')
};

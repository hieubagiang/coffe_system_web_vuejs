module.exports = {
  publicPath: process.env.VUE_APP_DEPLOY_ENV === "GH_PAGES"
    ? "/coffe_system_web_vuejs/"
    : "/",
};

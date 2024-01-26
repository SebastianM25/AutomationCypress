const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env:{
    user:"admin@phptravels.com",
    password:"demoadmin"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:"https://www.phptravels.net/admin/login.php",
  },
});

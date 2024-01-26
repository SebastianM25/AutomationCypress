const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env:{
    user:"admin@admin.com",
    password:"admin123"
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl:"https://qa-automation-practice.netlify.app/login.html",
  },
});

const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env:{
     user:"admin@admin.com",
    password1:"admin123",
     username:"Admin",
    password:"admin123" 
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    //baseUrl:"https://qa-automation-practice.netlify.app/login.html",
    baseUrl:"https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  },
});

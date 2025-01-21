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
    testIsolation:false,
  },
});

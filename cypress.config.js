const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    user: "admin@admin.com",
    password1: "admin123",
    username: "Admin",
    password: "admin123",
    gorestBaseUrl: "https://gorest.co.in/public/v2",
    bearerToken: "22b20f46d9bf87f782edcef4d5676b00c4df839914b990ae1a1ce94db0317572",
  },
  e2e: {
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    testIsolation:false,
  },
});

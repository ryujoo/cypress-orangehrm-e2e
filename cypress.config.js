const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    rbaseUrl: "https://opensource-demo.orangehrmlive.com",
    chromeWebSecurity: false,

    pageLoadTimeout: 60000,
    defaultCommandTimeout: 10000,

    setupNodeEvents(on, config) {
      // required but empty
    },
  },
});

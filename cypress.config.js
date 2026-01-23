const { defineConfig } = require("cypress");

export default defineConfig({
  e2e: {
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
  },
})

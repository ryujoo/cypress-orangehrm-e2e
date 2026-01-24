const { defineConfig } = require("cypress");

export default defineConfig({
  e2e: {
    retries: 0,
    defaultCommandTimeout: 8000,
    pageLoadTimeout: 60000,
    video: false,
  },
})

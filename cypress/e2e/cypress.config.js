const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Disable Chrome push notifications
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.name === 'chrome') {
          launchOptions.args.push('--disable-notifications')
          launchOptions.args.push('--disable-gcm-status')
          launchOptions.args.push('--disable-cloud-import')
        }
        return launchOptions
      })
    },
  },
});

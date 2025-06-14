const {
  withNativeFederation,
  shareAll,
} = require("@angular-architects/native-federation/config");
const globalSkipList = require("../../global-skip-list");

module.exports = withNativeFederation({
  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
    }),
  },

  // We don't need the skip list anymore thanks
  // to the new ignoreUnusedDeps feature below
  skip: [
    // 'rxjs/ajax',
    // 'rxjs/fetch',
    // 'rxjs/testing',
    // 'rxjs/webSocket',
    // ...globalSkipList
  ],

  // Please read our FAQ about sharing libs:
  // https://shorturl.at/jmzH0

  features: {
    ignoreUnusedDeps: true,
  },
});

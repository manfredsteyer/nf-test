const {
  withNativeFederation,
  shareAll,
  share
} = require("@angular-architects/native-federation/config");
const globalSkipList = require("../../global-skip-list");

module.exports = withNativeFederation({
  name: "primeng",

  exposes: {
    "./Component": "./projects/primeng/src/app/app.component.ts",
  },

  shared: {
    ...shareAll({
      singleton: true,
      strictVersion: true,
      requiredVersion: "auto",
      transient: true,
    }),
    ...share({
      "@primeng/themes/aura": {
        singleton: true,
        strictVersion: true,
        requiredVersion: "auto",
        transient: true,
        includeSecondaries: false,
        build: 'separate'
      },
    }),
  },

  skip: [
    "rxjs/ajax",
    "rxjs/fetch",
    "rxjs/testing",
    "rxjs/webSocket",

    ...globalSkipList,

    // Add further packages you don't need at runtime
  ],

  // Please read our FAQ about sharing libs:
  // https://shorturl.at/jmzH0
});

// console.log("module.exports", module.exports);

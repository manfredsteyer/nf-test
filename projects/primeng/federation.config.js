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
    }),
    ...share({
      "@primeng/themes/aura": {
        singleton: true,
        strictVersion: true,
        requiredVersion: "auto",
        includeSecondaries: false,
        build: 'separate'
      },
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

// console.log("module.exports", module.exports);

const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({

  name: 'ng-zorro-app',

  exposes: {
    './Component': './projects/ng-zorro-app/src/app/app.component.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
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

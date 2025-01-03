const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');
const globalSkipList = require('../../global-skip-list');

module.exports = withNativeFederation({

  name: 'angular-material-app',

  exposes: {
    './Component': './projects/angular-material-app/src/app/app.component.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
    ...globalSkipList,
    // Add further packages you don't need at runtime
  ]

  // Please read our FAQ about sharing libs:
  // https://shorturl.at/jmzH0
  
});
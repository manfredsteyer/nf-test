const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');
const globalSkipList = require('../../global-skip-list');

module.exports = withNativeFederation({

  name: 'ag-grid-app',

  exposes: {
    './Component': './projects/ag-grid-app/src/app/app.component.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto', transient: true }),
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

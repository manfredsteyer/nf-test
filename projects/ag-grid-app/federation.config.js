const { withNativeFederation, shareAll, share } = require('@angular-architects/native-federation/config');
const globalSkipList = require('../../global-skip-list');

module.exports = withNativeFederation({

  name: 'ag-grid-app',

  exposes: {
    './Component': './projects/ag-grid-app/src/app/app.component.ts',
  },

  //
  // Important: To make this work, explicitly install ag-grid-community so that it is shared too
  //
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

console.log('module.exports ', module.exports );

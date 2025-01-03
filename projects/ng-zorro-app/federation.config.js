const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({

  name: 'ng-zorro-app',

  exposes: {
    './Component': './projects/ng-zorro-app/src/app/app.component.ts',
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',

    p => p.startsWith('ng-zorro-antd/graph'),
    p => p.startsWith('ng-zorro-antd/cron-expression')
    // 'cron-parser',
    // 'd3-shape',
    // 'd3-drag',
    // 'd3-selection',
    // 'd3-zoom',
    // 'd3-transition',
    // Add further packages you don't need at runtime
  ]

  // Please read our FAQ about sharing libs:
  // https://shorturl.at/jmzH0
  
});

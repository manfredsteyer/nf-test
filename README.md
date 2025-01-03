# Native Federation Show Case

Demonstrates the Usage of Native Federation and several well-known component libraries for Angular.


## Covered Component Libraries

- ag-grid
- Angular Material
- Clarity
- Kendo UI
- ng-bootstrap
- ng-zorro
- primeng

## Trying it out

```
npm i -f
ng serve <project>
```

Please find the available projects that are named after the respective UI libraries in the `projects` folder.

As not each UI library always officially supports the latest Angular version, we need the `-f` when installing the dependencies.

## Transitive Flag

For the _primeng_ and _ag-grid_ demo, we need to activate the `transient` flag to get transitive dependencies shared separately. 

```javascript
  [...]
  shared: {
    ...shareAll({ 
        singleton: true, 
        strictVersion: true, 
        requiredVersion: 'auto', 

        // Activate transient flag
        transient: true 
    }),
  },
  [...]
```

## Optional Dependencies

For the _ng-zorro_ example, we added two secondary entry points that are not used by the application to the skip list. The reason for this is that they use optional dependencies (d3 and a cron expression parser) we did not want to install. If we used these entry points, we also could have installed these optional dependencis:

```javascript
skip: [
  [...]
  p => p.startsWith('ng-zorro-antd/graph'),
  p => p.startsWith('ng-zorro-antd/cron-expression')
  [...]
  // Add further packages you don't need at runtime
]
```

Also _primeng_ has an optional dependency to chart.js. We installed this one.

In future versions, we plan to auto-detect such unused secondary entry points and dependencies so that we can skip them automatically.

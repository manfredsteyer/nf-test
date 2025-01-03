# Native Federation Show Case

Demonstrates the Usage of Native Federation and several well-known UI libraries for Angular.

## Trying it out

```
npm i -f
ng serve <project>
```

Please find the available projects that are named after the respective UI libraries in the `projects` folder.

As not each UI library always officially supports the latest Angular version, we need the `-f` when installing the dependencies.

## Transitive Flag

Please note that for primeng and ag-grid we need to activate the `transient` flag to get transitive dependencies shared separately. 

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
If you want to build considering the dependency order between packages automatically

```console
% tsc -b --clean
% npm install
% tsc -b
```

If you want to build individually

```console
% npm run build -w named-exports-no-default
```

If you want to build all packages together:

```console
% npm run build -ws
% npm run build -ws
```

However, this last method does NOT automatically resolve dependencies, so you need to run the build multiple times.

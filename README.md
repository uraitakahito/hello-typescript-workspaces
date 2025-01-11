If you want to build considering the dependency order between packages automatically

```console
% npm install
% tsc -b
```

If you want to build individually

```console
% npm run build -w named-exports-no-default
```

If you want to build all packages together

```console
% npm run build -ws
```

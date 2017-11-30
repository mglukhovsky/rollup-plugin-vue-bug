This repo reproduces a bug in rollup-plugin-vue.

To see the build error, run:
```
npm run build
```

If  you remove the second ternary expression in `App.vue`, the build will succeed.

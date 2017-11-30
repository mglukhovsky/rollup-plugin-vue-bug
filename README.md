This repo reproduces a [bug](https://github.com/vuejs/rollup-plugin-vue/issues/159) in rollup-plugin-vue.

To see the build error, run:
```
npm install
npm run build
```

If  you remove the second ternary expression in [`App.vue`](https://github.com/mglukhovsky/rollup-plugin-vue-bug/blob/master/src/components/App.vue), the build will succeed.

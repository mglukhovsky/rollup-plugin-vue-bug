<template>
  <p>{{ message }}</p>
  <p>3 is {{ 3 > 2 ? 'greater': 'less'}} than 2</p>
  <!-- This next ternary expression will fail because of the `<` symbol -->
  <p>2 is {{ 2 < 3 ? 'less': 'greater'}} than 3</p>
</template>

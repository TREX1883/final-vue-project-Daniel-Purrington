<template>
  <v-app>
    <v-content>
      <h1>Testing display</h1>
      <magic-grid :mtgs="mtgs"></magic-grid>
    </v-content>
  </v-app>
</template>

 <script>
import MagicGrid from './MagicGrid.vue'
import { mtgs } from './MTG-api.js'

export default {
  components: {
    'magic-grid': MagicGrid,
  },
  data: () => {
    return {
      mtgs
    }
  },
};
</script>
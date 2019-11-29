<template class="container">
  <v-app>
    <v-content>
      <!-- <h1>MTG cards for sale</h1> -->
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

<style scoped>
.container {
  background-color: black;
}
</style>
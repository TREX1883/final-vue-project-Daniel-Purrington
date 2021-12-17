<template class="container">
  <v-app>
    <v-content>
      <h1>GraphQL</h1>
      <!-- <magic-grid :mtgs="mtgs"></magic-grid> -->
    </v-content>
  </v-app>
</template>

 <script>
// import MagicGrid from './MagicGrid.vue'
// import { mtgs } from './MTG-api.js'

// export default {
//   components: {
//     'magic-grid': MagicGrid,
//   },
//   data: () => {
//     return {
//       mtgs
//     }
//   },
// };

import gql from 'graphql-tag'

export default {
  apollo: {
    // Simple query that will update the 'hello' vue property
    hello: gql`query {
      hello
    }`,
  },
}

</script>

<style scoped>
.container {
  background-color: black;
}
.h1 {
  text-align:center;
}
</style>
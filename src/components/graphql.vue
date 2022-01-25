<template class="container">
  <v-app>
    <v-content>
      <h1>GraphQL2</h1>
      <div>{{ allMtgs }} test </div>
      
    </v-content>
  </v-app>
</template>

 <script>
import gql from 'graphql-tag'

export default {
  data() {
    return {
      allMtgs: [],
    }
  },
  apollo: {
    // Simple query that will update the 'allMTGs' vue property
    allMtgs: gql`query {
      allMtgs {
    id
    name    
    text
  }
    }`,
  },
}
</script>

<style scoped>
.container {
  background-color: black;
}
</style>
<template class="container">
  <v-app>
    <v-content>
      <h1>GraphQL2</h1>
      <div>{{ allMtgs }} </div>
      <p>{{ allMtgs.name }}</p>
    </v-content>
  </v-app>
</template>

<template>
  <!-- Apollo watched Graphql query -->
  <ApolloQuery :query="require('../graphql/allMTGs.gql')"
   :variables="{ searchString }">
    <template v-slot="{ result: { loading, error, data } }">
      <!-- Loading -->
      <div v-if="loading" class="loading apollo">Loading...</div>

      <!-- Error -->
      <div v-else-if="error" class="error apollo">An error occured</div>

      <!-- Result -->
      <div v-else-if="data" class="result apollo">
        <v-row>
          <v-col cols="4" v-for="(list, i) in data.courses" :key="i">
            <v-card class="mx-auto" max-width="350">
              <v-card-text>
                <div>{{ list.name }}</div>    
                <div class="text--primary">
                  {{ list.text }}
                </div>
              </v-card-text>          
            </v-card>
          </v-col>
        </v-row>
      </div>

      <!-- No result -->
      <div v-else class="no-result apollo">No result</div>
    </template>
  </ApolloQuery>
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


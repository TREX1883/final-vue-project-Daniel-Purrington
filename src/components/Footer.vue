<template>

   <v-footer
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-text class="footer py-2 white--text text-center">
        {{ new Date().getMonth()+1 }} / {{ new Date().getDate() }} / {{ new Date().getFullYear() }} — <strong>MTG</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
 export default {
    data: () => ({
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram',
      ],
    }),
  }
</script>

<style>
.footer {
  background-color: black;
    /* background-color: rgb(65, 63, 63); */
    color: red;
    /* margin: 15px 0px; */
}
.subheading {
  color: red;
}
</style>

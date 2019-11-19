<template>
  <!-- <div class="row">
            <div class="col-xs-12">
                <footer>
                    <p>All Servers are managed here</p>
                </footer>
            </div>
  </div>-->
  <!-- <v-footer>
      <v-row class="footer" justify="center">&copy; {{ new Date().getFullYear() }}</v-row>
  </v-footer> -->

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
        {{ new Date().getFullYear() }} — <strong>MTG</strong>
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
    background-color: rgb(65, 63, 63);
    color: red;
}
.subheading {
  color: red;
}
</style>

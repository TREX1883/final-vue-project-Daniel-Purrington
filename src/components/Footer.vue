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
      <v-card-title class="footer">
        <strong class="subheading">Get connected with us on social networks!</strong>
            <v-col cols="12" sm="3">
                <v-btn text icon color="red">
                <v-icon>mdi-heart</v-icon>
                </v-btn>
            </v-col>
        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon
        >
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>

      <v-card-text class="footer py-2 white--text text-center">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
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

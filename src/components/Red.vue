<template>
  <div>
    <!-- <v-row justify="space-around">
      <v-switch v-model="extended" class="mx-2" label="Extended"></v-switch>
      <v-switch v-model="extendedSlot" class="mx-2" label="Extension slot"></v-switch>
      <v-switch v-model="prominent" class="mx-2" label="Prominent"></v-switch>
      <v-switch v-model="dense" class="mx-2" label="Dense"></v-switch>
      <v-switch v-model="collapse" class="mx-2" label="Collapse"></v-switch>
      <v-switch v-model="flat" class="mx-2" label="Flat"></v-switch>
      <v-switch v-model="bg" class="mx-2" label="Background"></v-switch>
      <v-col cols="12">
        <v-slider v-model="extensionHeight" label="Extension height" min="600" max="600"></v-slider>
      </v-col>
    </v-row> -->

    <v-toolbar
      :extended="extended"
      :prominent="prominent"
      :dense="dense"
      :collapse="collapse"
      :flat="flat"
      :src="bg ? 'https://images2.alphacoders.com/571/571767.jpg' : undefined"
      :extension-height="extensionHeight"
    >
      <!-- <template v-if="extendedSlot" #extension>
        <v-toolbar-items>
          <v-btn text>Link 1</v-btn>
          <v-btn text>Link 2</v-btn>
          <v-btn text>Link 3</v-btn>
        </v-toolbar-items>
      </template> -->

      <v-toolbar-title>The Magic Gatherings</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items class="white">
        <v-btn class="white" text>Login</v-btn>
        <v-btn class="white" text>Trading</v-btn>
        <v-btn class="white" text>Test</v-btn>
      </v-toolbar-items>

      <!-- <template v-if="$vuetify.breakpoint.smAndUp">
        <v-btn icon>
          <v-icon>mdi-export-variant</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-delete-circle</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-plus-circle</v-icon>
        </v-btn>
      </template> -->
    </v-toolbar>
  </div>
</template>

<script>
export default {
    data: () => ({
      extended: true,
      extendedSlot: false,
      prominent: false,
      dense: true,
      collapse: false,
      flat: false,
      bg: true,
      extensionHeight: 700,
    }),
  }
</script>

<style scoped>
    div {
        /* border: 1px solid red; */
        /* background-color: lightcoral; */
        /* padding: 30px; */
        /* margin: 20px auto; */
        /* text-align: center */
        color: white;
    }
    .white {
        padding: 0px;
        color: white;
        /* border-radius: 15px; */
    }
    /* v-toolbar-items {
        background-color: red;
        opacity: .5;
    } */
</style>
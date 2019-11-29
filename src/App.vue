<template>
    <v-app>
        <v-content>
            <v-container>
                <div>
    <v-toolbar
      dense="dense"
      flat="flat"
      src="https://live.staticflickr.com/773/22509192186_cab0672437_b.jpg"
    >
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn class="menu" @click="selectedComponent = 'appLogin'" text>Login</v-btn>
        <v-btn class="menu" @click="selectedComponent = 'appTrading'" text>MTG Trading</v-btn>
        <v-btn class="menu" @click="selectedComponent = 'appCards'" text>MTG API</v-btn>
        <v-btn class="menu" @click="selectedComponent = 'appBlue'" text>Blue</v-btn>
        <v-btn class="menu" @click="selectedComponent = 'appRed'" text>Red</v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </div>
            <component :is="selectedComponent">
                <p>This is the Content</p>
            </component>
        <app-footer></app-footer>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    import Login from './components/Login.vue';
    import Trading from './components/Trading.vue';
    import Cards from './components/MagicList.vue';
    import Blue from './components/Blue.vue';
    import Red from './components/Red.vue';
    import Footer from './components/Footer.vue';

    export default {
        data: () => {
          return {
              selectedComponent: 'appLogin',
          }
        },
        components: {
            appLogin: Login,
            appTrading: Trading,
            appCards: Cards,
            appBlue: Blue,
            appRed: Red,
            'app-footer': Footer
        }
    }
</script>

<style scoped>
    .menu {
    color: white;
    }
    .btn {
        color: red;
    }
</style>

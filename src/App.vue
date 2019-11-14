
<template>
    <!-- <div class="container">
    <div class="col-lg-12">
    <v-toolbar-items class="white">
                <v-btn class="white" @click="selectedComponent = 'appLogin'" text>Login</v-btn>
                <v-btn class="white" @click="selectedComponent = 'appTrading'" text>MTG Trading</v-btn>
                <v-btn class="white" @click="selectedComponent = 'appBlue'" text>Load Blue Template</v-btn>
                <v-btn class="white" @click="selectedComponent = 'appRed'" text>Load Red Template</v-btn>  
                <hr>
                <component :is="selectedComponent">
                    <p>This is the Content</p>
                </component>
      </v-toolbar-items>
    </div>
  </div> -->
        <div class="container">
            <div class="col-lg-12 align">
                <v-btn class="btn" @click="selectedComponent = 'appLogin'">Login</v-btn>
                <v-btn class="btn" @click="selectedComponent = 'appTrading'">MTG Trading</v-btn>
                <v-btn class="btn" @click="selectedComponent = 'appBlue'">Load Blue Template</v-btn>
                <v-btn class="btn" @click="selectedComponent = 'appRed'">Load Red Template</v-btn>  
                <!-- <hr> -->
                <component :is="selectedComponent">
                    <p>This is the Content</p>
                </component>
            </div>
    </div>
</template>

<script>
    import Login from './components/Login.vue';
    import Trading from './components/Trading.vue';
    import Blue from './components/Blue.vue';
    import Red from './components/Red.vue';

    export default {
        data: function() {
          return {
              selectedComponent: 'appLogin'
          }
        },
        components: {
            appLogin: Login,
            appTrading: Trading,
            appBlue: Blue,
            appRed: Red,
        }
    }
</script>

<style scoped>
    /* .container {
        background-color: black;
    width: 100%;
    height: 100%;
    background-image:url(https://images2.alphacoders.com/571/571767.jpg);
    background-size: cover;
    background-attachment:fixed;
    margin: 0;
    padding: 0;
    color: white;
    } */
    /* .btn { */
        /* margin: 10px; */
        /* padding: 15px; */
        /* background-color: blue; */
        /* align-content: center; */
    /* } */
    /* .container{
        align-items: flex-end;
    } */
        div {
        /* border: 1px solid red; */
        /* background-color: transparent; */
        /* padding: 30px; */
        /* margin: 20px auto; */
        /* text-align: center */
        color: white;
        opacity: 1;
        /* color: white; */
    }
    .white {
        /* padding: 0px; */
        color: white;
        opacity: 1;
        /* border-radius: 15px; */
    }
</style>

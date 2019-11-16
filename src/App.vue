
<template>
    <v-app>
        <v-content>
            <v-container>
        <v-parallax 
        src="https://images2.alphacoders.com/571/571767.jpg" 
        height="700" 
        justify="center" 
        align="center">
            <h1 class="text-center">MTG</h1>
            <h2 class="text-center">Trading</h2>
            <app-footer></app-footer>
        </v-parallax>
    <!-- <div class="container"> -->
        <!-- <div>
            <v-btn class="btn" @click="selectedComponent = 'appLogin'">Login</v-btn>
            <v-btn class="btn" @click="selectedComponent = 'appTrading'">MTG Trading</v-btn>
            <v-btn class="btn" @click="selectedComponent = 'appBlue'">Load Blue Template</v-btn>
            <v-btn class="btn" @click="selectedComponent = 'appRed'">Load Red Template</v-btn>  

            <component :is="selectedComponent">
                <p>This is the Content</p>
            </component>
        </div> -->
        <app-footer></app-footer>
    <!-- </div> -->
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
    // import Login from './components/Login.vue';
    // import Trading from './components/Trading.vue';
    // import Blue from './components/Blue.vue';
    // import Red from './components/Red.vue';
    import Footer from './components/Footer.vue';

    export default {
    //     data: () => {
    //       return {
    //           selectedComponent: 'appLogin',
    //       }
    //     },
        components: {
    //         appLogin: Login,
    //         appTrading: Trading,
    //         appBlue: Blue,
    //         appRed: Red,
            'app-footer': Footer
        }
    }
</script>

<style scoped>
    /* div {
        color: white;
        opacity: 1;
    } */
    /* .white {
        color: white;
        opacity: 1;
    } */
    .container {
    color: white;
    /* background-color: black; */
    /* width: 100%; */
    /* height: 100%; */
    /* background-image:url(https://images2.alphacoders.com/571/571767.jpg); */
    /* background-size: cover; */
    /* background-attachment:fixed; */
    /* margin: 0; */
    /* padding: 0; */
    /* color: white; */
    }
    .btn {
        color: red;
    }
</style>

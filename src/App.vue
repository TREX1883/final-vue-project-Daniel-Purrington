<template>
    <v-app>
        <v-content>
            <appNav></appNav>
            <router-view></router-view>
        </v-content>
        <appFooter></appFooter>
    </v-app>
</template>

<script>
    import Nav from './components/Nav';
    import Footer from './components/Footer';

    export default {
        name: 'App',
        data: () => ({
            // testArray: [],
            // items: null,
        //   return {
        //       selectedComponent: 'appLogin',
        //   }
        }),
        components: ({
            'appNav': Nav,
            'appFooter': Footer,
        }),
    };
</script>



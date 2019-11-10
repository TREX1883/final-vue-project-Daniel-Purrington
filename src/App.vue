
<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <v-btn class="btn btn-explosion" @click="selectedComponent = 'appLogin'">Login</v-btn>
                <v-btn class="btn btn-success" @click="selectedComponent = 'appTrading'">MTG Trading</v-btn>
                <v-btn class="btn btn-primary" @click="selectedComponent = 'appBlue'">Load Blue Template</v-btn>
                <v-btn class="btn btn-danger" @click="selectedComponent = 'appRed'">Load Red Template</v-btn>
                
                <!-- <hr> -->
                <component :is="selectedComponent">
                    <p>This is the Content</p>
                </component>
                <!--<app-blue>-->
                    <!--<p>This is the Content</p>-->
                <!--</app-blue>-->
                <!--<app-green>-->
                    <!--<p>This is the Content</p>-->
                <!--</app-green>-->
                <!--<app-red>-->
                    <!--<p>This is the Content</p>-->
                <!--</app-red>-->
            </div>
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

<style scope>
    .container {
        background-color: black;
    }
    .btn {
        margin: 10px;
    }
</style>

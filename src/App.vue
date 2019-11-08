
<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <v-btn class="btn btn-explosion" @click="selectedComponent = 'appLogin'">Login</v-btn>
                <v-btn class="btn btn-primary" @click="selectedComponent = 'appBlue'">Load Blue Template</v-btn>
                <v-btn class="btn btn-success" @click="selectedComponent = 'appGreen'">Load Green Template</v-btn>
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
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';
    import Login from './components/Login.vue';

    export default {
        data: function() {
          return {
              selectedComponent: 'appLogin'
          }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red,
            appLogin: Login,
            // Servers,
            // 'app-server-details': ServerDetails
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

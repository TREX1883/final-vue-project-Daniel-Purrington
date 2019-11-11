
<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="selectedComponent = 'appBlue'">Load Blue Template</button>
                <button class="btn btn-success" @click="selectedComponent = 'appGreen'">Load Green Template</button>
                <button class="btn btn-danger" @click="selectedComponent = 'appRed'">Load Red Template</button>
                <button class="btn btn-explosion" @click="selectedComponent = 'appYellow'">Load Yellow Template</button>
                <hr>
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
        <hr>
        <div class="row">
            <servers></servers>
        </div>
        <hr>
    </div>
</template>

<script>
    import Servers from './components/Servers.vue';
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';
    import Yellow from './components/Yellow.vue';

    export default {
        data: function() {
          return {
              selectedComponent: 'appBlue'
          }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red,
            appYellow: Yellow,
            Servers,
        }
    }
</script>

<style>
</style>

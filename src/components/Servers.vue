<template>
    <div class="col">

<h1>List of all Servers</h1>
        <ul class="list-group">
            <app-server
                v-for="server in servers" V-bind:key = "server.id"
                :server="server"></app-server>
        </ul>
    </div>
</template>

<script>
    import Server from './Server.vue';

    export default {
        data: function() {
            return {
              servers: [
                  { id: 1, status: 'Normal'},
                  { id: 2, status: 'Critical'},
                  { id: 3, status: 'Unknown'},
                  { id: 4, status: 'Normal'},
                  { id: 5, status: 'Critical'},
                  { id: 6, status: 'Unknown'},
                //   { id: 5, server: 'Test'},
              ]
            };
        },
        components: {
            appServer: Server
        }
    }
</script>

<style>
.list-group {
    background-color: rgb(187, 184, 184);
    padding: 10px;
}
</style>

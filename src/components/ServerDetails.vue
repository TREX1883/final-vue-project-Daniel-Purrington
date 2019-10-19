<template>
    <div class="col">
        <div class="row">
        <h1 class="server-align">Server Condition</h1>
            <v-col cols="12" sm="3">
                <v-btn text icon color="red">
                <v-icon>mdi-heart</v-icon>
                </v-btn>
            </v-col>
        </div>
        <p v-if="!server">Please select a Server</p>
        <p v-else>Server #{{ server.id }} selected, Status: {{ server.status }}</p>
        <hr>
        <br>
        <div>
        <button class="button" @click="normalStatus">Change to Normal</button>
        </div>
        <div>
        <button class="button" @click="unknownStatus">Change to Unknown</button>
        </div>
        <div>
        <button class="button" @click="criticalStatus">Change to Critical</button>
        </div>
    
    </div>

</template>

<script>
    import { serverBus } from '../../main';

    export default {
        data: function() {
            return {
                server: null
            }
        },
        methods: {
          normalStatus() {
              this.server.status = 'Normal';
          },
                    unknownStatus() {
              this.server.status = 'Unknown';
          },
                    criticalStatus() {
              this.server.status = 'Critical';
          }
        },
        created() {
            serverBus.$on('serverSelected', (server) => {
                this.server = server;
            });
        }
    }
</script>

<style>

.col {
    background-color: rgb(104, 189, 223);
    margin: 10px;
}

.server-align {
    padding: 8px;
    margin-top: -2px;
}


.button {
    background-color: gray;
    margin: 4px;
    padding: 3px;
    border-radius: 5px;
    border: 1px solid black;
    transition: 0.3s;
}

.button:hover {
    background-color: rgb(34, 33, 33);
    color: white;
}
</style>

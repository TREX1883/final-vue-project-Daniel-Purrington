<template>
<div> 
    <!-- <h1>server.vue</h1> -->
    <li
            class="list-group-item"
            style="cursor: pointer"
            @click="serverSelected">
        <button class="button">Server #{{ server.id }}</button>
    </li>
</div>
</template>

<script>
    import { serverBus } from '../../main';

    export default {
        props: ['server'],
        methods: {
            serverSelected() {
                serverBus.$emit('serverSelected', this.server);
            }
        }
    }
</script>

<style>

</style>

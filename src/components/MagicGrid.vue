<template>
    <v-container>
        <h1>Test from Magic Grid</h1>
        <v-row>
            <v-col cols="3" v-for="mtg in mtgs" :key="mtg.multiverseid">
                <magic-cards :mtg="mtg"></magic-cards>
            </v-col> 
        </v-row>    
    </v-container>
</template>

<script>
import MagicCards from './MagicCards.vue'

export default {
    props: ["mtgs"],
    components: {
       MagicCards 
    }
}
</script>

<style scoped>

</style>
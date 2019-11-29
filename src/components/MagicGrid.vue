<template>
    <v-container>
        <!-- <div> -->
        <h1>Magic Cards for sale</h1>
        <!-- </div> -->
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
h1 {
    text-align: center;
    color: white;
}

</style>
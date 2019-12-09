<template>
    <v-card>
        <v-card-title>
            <div>
                <div>
                    <v-img :src="mtg.imageUrl"></v-img>
                </div>
                <div><h2> {{ mtg.rarity }} </h2></div>
                <div><h4> {{ mtg.number | currency }} </h4></div>
                <!-- <div><h3> {{ mtg.setName }} </h3></div> -->
            </div>
        </v-card-title>    
    </v-card>
</template>

<script>
export default {
    props: ["mtg"],
}
</script>

<style scoped>

</style>
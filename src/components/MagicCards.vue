<template>
    <v-card>
        <v-card-title>
            <div>
                <!-- <h1>Test</h1> -->
                <h3> {{ mtg.name }} </h3>
                <div>
                    <!-- {{ mtg.colors[0] }}  add [0] to remove [] from website -->
                </div>
                <div>
                    <!-- <v-img src="mtg.imageUrl"></v-img> -->
                    <!-- {{ mtg.imageUrl }}  -->
                    <v-img :src="mtg.imageUrl"></v-img>
                </div>
            </div>
        </v-card-title>    
        <v-card-actions>

        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    props: ["mtg"],
}
</script>

<style scoped>

</style>
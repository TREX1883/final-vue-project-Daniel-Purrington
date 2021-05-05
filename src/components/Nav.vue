<template>
    <div>
        <v-toolbar src="https://live.staticflickr.com/773/22509192186_cab0672437_b.jpg">
            <v-toolbar-title class="menu1" text>MTG</v-toolbar-title>
    
            <v-spacer></v-spacer>
    
            <v-toolbar-items>
            <v-btn to="/" class="menu">Home</v-btn>
            <v-btn to="/cards" class="menu">Cards</v-btn>
            <!-- <v-btn to="/blue" class="menu">Test</v-btn> -->
            <!-- <v-btn class="menu">Link 1</v-btn> -->
            <!-- <v-btn class="menu">Link 2</v-btn> -->
            <v-btn to="/forms" class="menu">Form</v-btn>
            <v-btn to="/crud" class="menu">CRUD</v-btn>
            <v-btn to="/graphql" class="menu">GraphQL</v-btn>
            </v-toolbar-items>
        </v-toolbar>
    </div>
</template>

<script>

</script>

<style scoped>
    .menu {
        border-left: 1px solid black;
        border-right: 1px solid black;
    }

    .menu1 {
        color: white;
    }
</style>
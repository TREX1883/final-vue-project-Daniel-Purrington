<template>
                <div>
                    <v-toolbar src="https://live.staticflickr.com/773/22509192186_cab0672437_b.jpg">
                        <v-toolbar-title class="menu" text>MTG</v-toolbar-title>
                
                        <v-spacer></v-spacer>
                
                        <v-toolbar-items>
                        <v-btn to="/" class="menu">Home</v-btn>
                        <v-btn to="/cards" class="menu">Cards</v-btn>
                        <v-btn to="/blue" class="menu">Blue</v-btn>
                        <!-- <v-btn class="menu">Link 1</v-btn> -->
                        <!-- <v-btn class="menu">Link 2</v-btn> -->
                        <v-btn to="/forms" class="menu">Form</v-btn>
                        <!-- <v-btn class="menu" @click="selectedComponent = 'appLogin'" text>Login</v-btn>
                        <v-btn class="menu" @click="selectedComponent = 'appTrading'" text>MTG Trading</v-btn>
                        <v-btn class="menu" @click="selectedComponent = 'appCards'" text>MTG API</v-btn>
                        <v-btn class="menu" @click="selectedComponent = 'appBlue'" text>Blue</v-btn>
                        <v-btn class="menu" @click="selectedComponent = 'appRed'" text>Red</v-btn> -->
                        <!-- <v-btn class="menu" @click="selectedComponent = 'appTest'" text>Test</v-btn> -->
                        </v-toolbar-items>

                    </v-toolbar>
                    <!-- <v-toolbar
                    dense="dense"
                    flat="flat"
                    src="https://live.staticflickr.com/773/22509192186_cab0672437_b.jpg"
                    > -->
                    <!-- <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <v-btn class="menu" @click="selectedComponent = 'appLogin'" text>Login</v-btn>
                        <v-btn class="menu" @click="selectedComponent = 'appTrading'" text>MTG Trading</v-btn>
                        <v-btn class="menu" @click="selectedComponent = 'appCards'" text>MTG API</v-btn>
                        <v-btn class="menu" @click="selectedComponent = 'appBlue'" text>Blue</v-btn>
                        <v-btn class="menu" @click="selectedComponent = 'appRed'" text>Red</v-btn>
                        <v-btn class="menu" @click="selectedComponent = 'appTest'" text>Test</v-btn>
                    </v-toolbar-items>
                    </v-toolbar> -->
                </div>
</template>

<script>

</script>

<style scoped>
    .menu {
        color: white;
        opacity: .5;
        border-left: 1px solid black;
        border-right: 1px solid black;
    }
    .menu:hover {
        opacity: 1;
        transition: 0.5s;
    }
</style>
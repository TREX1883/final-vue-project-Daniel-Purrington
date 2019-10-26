<template>
    <div class="container">
        <h1>This is Blue color</h1>
        <button>Click</button>
        <slot></slot>
    </div>
</template>

<script>

</script>

<style scoped>
    div {
        border: 1px solid blue;
        background-color: lightblue;
        padding: 30px;
        margin: 20px auto;
        text-align: center
    }
    button {
        background-color: white;
        color: black;
        border: 2px solid blue;
        border-radius: 5px;
        padding: 5px;
    }
</style>
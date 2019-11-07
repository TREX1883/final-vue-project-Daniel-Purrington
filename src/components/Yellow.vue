<template>
    <div class="container">
       <div class="row">
           <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
               <h1>Http</h1>
               <div class="form-group">
                   <label>UserName</label>
                   <input type="text" class="form-control" v-model="user.username">
               </div>
                <div class="form-group">
                   <label>Mail</label>
                   <input type="text" class="form-control" v-model="user.email">
               </div>
                <V-btn class="btn btn-primary" @click="submit">Submit</v-btn>
                <!-- <v-btn class="btn btn-primary">test </v-btn> -->
           </div>
       </div>
    </div>
</template>

<script>
 export default {
     data() {
         return {
            user: {
                username: '',
                email: ''
            }
         };
     },
     methods: {
         submit() {
            //  console.log(user);
         }
     }
 }
</script>

<style scoped>
    /* div {
        border: 1px solid yellow;
        background-color: lightyellow;
        padding: 30px;
        margin: 20px auto;
        text-align: center
    } */
</style>
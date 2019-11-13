<template>
    <div class="container"
    :style="{ 
        backgroundImage: 'url(' + require('@/images/Login-background.jpg') + ')' 
    }"
    >
    <!-- <img id="background-image" src="/image/Login-background" alt="mtg background"> -->
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



            <!-- <v-row align="center" class="lightbox white--text pa-2 fill-height">
                <v-col>
                    <div class="name" align="center">Jonathan Lee</div>
                    <div class="email">heyfromjonathan@gmail.com</div>
                </v-col>
            </v-row> -->






</template>

<script>
 export default {
     data() {
         return {
             user: {}
         }
     },
     methods: {
         submit() {
         }
     }
 }

</script>

<style scoped>
    div {
        border: 1px solid red;
        background-color: lightcoral;
        padding: 30px;
        margin: 20px auto;
        text-align: center
    }
</style>
<template>
            <v-img
              src="@/images/Login-background.jpg">

            <v-row>
                <v-col class="center" align="center">
                    
                    <!-- <div class="name">Jonathan Lee</div> -->
                    <!-- <v-form>Name</v-form> -->
                    <!-- <div class="email">heyfromjonathan@gmail.com</div> -->
                    <div class="form-group">
                   <label>UserName</label>
                   <input type="text" class="form-control-2" v-model="user.username">
               </div>
                <div class="form-group">
                   <label>E-mail</label>
                   <input type="text" class="form-control-2" v-model="user.email">
               </div>
                    <v-btn class="submit" @click="submit" >Submit</v-btn>
                </v-col>
            </v-row>
             
            </v-img>
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
            //  console.log(this.user);
         }
     }
 }
</script>

<style scoped>
    .center {
        margin: 250px 0px 0px 0px;
    }
    /* .form-control {
        padding: 10px;
        background: black;
        opacity: .5;
        border-radius: 5px;
    } */
    .form-control-2 {
        margin: 6px;
        background: black;
        opacity: .3;
        border-radius: 5px;
        width: 150px;
    }
    .submit {
        opacity: .8;
    }
    /* .img {
        max-width: 10%;   
    } */
    /* .name { */
        /* margin: 50%; */
    /* } */
    /* div { */
        /* max-width: 100%; */
        /* height: 500px; */
        /* color: white; */
        /* background-image: url('images/Login-background') */
    /* } */
    /* div {
        border: 1px solid yellow;
        background-color: lightyellow;
        padding: 30px;
        margin: 20px auto;
        text-align: center
    } */
</style>
// https://console.firebase.google.com/u/0/project/final-project-vue/database/final-project-vue/data/data

<template>
<div>
            <v-img
              src="@/images/Login-background.jpg">
            </v-img>
            <v-row>
                <v-col class="center" align="center">
                    <div class="form-group">
                   <label>UserName</label>
                   <input type="text" class="form-control-2" v-model="user.username">
               </div>
                <div class="form-group">
                   <label>E-mail</label>
                   <input type="text" class="form-control-2" v-model="user.email">
               </div>
                    <v-btn class="submit" @click="submit">Submit</v-btn>
                    <br>
                    <v-btn class="submit" @click="getData">Get Data</v-btn>
                        <ul>
                            <li v-for="u in users" :key="u.user">{{ u.username }} - {{ u.email }}</li>
                        </ul>
                </v-col>
            </v-row>
             
           
</div>
</template>

<script>
 export default {
     data() {
         return {
            user: {
                username: '',
                email: ''
            },
            users: []
         };
     },
     methods: {
         submit() {
            // console.log(this.user);
            this.$http.post('https://final-project-vue.firebaseio.com/data.json', this.user)
                // .then(response => {
                    // console.log(response);
                // }, error => {
                    // console.log(error);
                // });
         },
         getData() {
             this.$http.get('https://final-project-vue.firebaseio.com/data.json')
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    const resultArray = [];
                    for (let key in data) {
                        resultArray.push(data[key])
                    }
                    this.users = resultArray;
                });
         }
     }
 }
</script>

<style scoped>
    .center {
        margin: 250px 0px 0px 0px;
    }
    .form-control-2 {
        margin: 6px;
        background: white;
        /* opacity: .3; */
        border-radius: 5px;
        width: 150px;
        border: 1px solid black;
    }
    .submit {
        opacity: .8;
    }
</style>
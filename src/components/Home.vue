// https://console.firebase.google.com/u/0/project/final-project-vue/database/final-project-vue/data/data

<template>
    <v-parallax 
    src="https://i.pinimg.com/originals/79/44/9d/79449de3ab2d49756d54be57bdc8cede.jpg" 
    height="650" >
        <v-row>
            <v-col class="center" align="center">
                <br>
                <br>
                <div class="form-group">
                    <label>UserName</label>
                    <input type="text" class="form" v-model="user.username">
                </div>
                <div class="form-group">
                    <label>E-mail</label>
                    <input type="text" class="form" v-model="user.email">
                </div>
                <br>
                <v-btn class="submit" @click="submit" to="/cards">Submit</v-btn>
                <br>
                <br>
                <v-btn class="submit" @click="getData">Get Data</v-btn>
                    <ul>
                        <li style="list-style-type:none" v-for="u in users" :key="u.user">{{ u.username }} - {{ u.email }}</li>
                    </ul>
            </v-col>
        </v-row>
    </v-parallax>
</template>

<script>
 export default {
     data() {
         return {
            user: {
                username: '',
                email: ''
            },
            users: [],
            // resource: {}
         };
     },
     methods: {
         submit() {
            // console.log(this.user);
            this.$http.post('', this.user)
                // .then(response => {
                    // console.log(response);
                // }, error => {
                    // console.log(error);
                // });
                // this.resource.save({}, this.user);
                // this.resource.saveAlt(this.user);
         },
         getData() {
             this.$http.get('')
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
         },
        //  created() {
        //      const customActions = {
        //          saveAlt: {method: 'POST', url: 'alternative.json'}
        //      };
        //      this.resource = this.$resource('data.json', {}, customActions);
    //  }
 }
</script>

<style scoped>
    .center {
        margin: 225px 0px;
    }
    .form {
        color: black;
        margin: 6px;
        padding: 0px 4px;
        background: white;
        border-radius: 5px;
        width: 150px;
        border: 1px solid black;
    }
    .submit {
        opacity: .8;
    }
</style>
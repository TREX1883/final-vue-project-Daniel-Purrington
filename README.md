# Vue.js Final Project with Vuetify

## Netlify Url Link
[Final Project Vue.js](https://zen-pare-491f91.netlify.com/)

## Effectively use conditional logic and JavaScript array methods to render large lists.

```javascript

```
## Encapsulate your code as VueJS single-file components.

```javascript
<template>
    <v-app>
        <v-content>
            <appNav></appNav>
            <router-view></router-view>
        </v-content>
        <appFooter></appFooter>
    </v-app>
</template>

```
## Work with the Vue-CLI to create and manage your project within a real development toolset.

```javascript

```
## Properly use Git for your source version control with an established record of at least 4 days of commits each week from October 15th through December 6th.
[GitHub commits Final Project ](https://github.com/TREX1883.com/)

## Allow communication between components using props, custom events, or local store.

```javascript

```
## Present a form for user input that provides useful form validation and feedback.

```javascript

```
## Create a custom directive and use it on at least one of your components.

```javascript

```
## Use a mix of animations and transitions to enhance some aspects of your project.

```javascript

```
## Connect to a server using HTTP and display retrieved data (use vue-resource or Axios).
main.js
```javascript
Vue.http.options.root = 'https://project-vue-65b6f.firebaseio.com/data.json';
```
Home.vue
```javascript
<script>
export default {
    data() {
        return {
            user: {
                username: '',
                email: ''
            },
            users: [],
            resource: {}
        };
    },
    methods: {
        submit() {
            this.$http.post('', this.user)
        },
        getData() {
            this.$http.get('')
            .then(response => {
                return response.json();
            }) .then(data => {
                const resultArray = [];
                for (let key in data) {
                    resultArray.push(data[key])
                }
                this.users = resultArray;
            });
        }
        },
    }
</script>
```
## Provide at least 3 different routes with navigation between them using vue-router.
routes.js
```javascript
    import Home from './components/Home.vue';
    import Forms from './components/Forms.vue';
    import Cards from './components/MagicList.vue';
    import Blue from './components/Blue.vue';
    import Red from './components/Red.vue';

    export const routes = [
        { path: '', component: Home },
        { path: '/forms', component: Forms },
        { path: '/cards', component: Cards },
        { path: '/blue', component: Blue },
        { path: '/red', component: Red },
    ]
```
## Manage your application's state using vuex.

```javascript

```
## Structure, document, and deploy your final project code according to common industry practices.

```javascript

```



# my-app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


https://vuetifyjs.com/en/components/grids
Grid System Playground - Useful to make content cleaner

https://vuetifyjs.com/en/components/toolbars
Toolbars - In the playground and click on Background - Get the idea how those link buttons are over the image.

https://codepen.io/tahazsh/pen/KrYwQb
image input component to preview images

https://codepen.io/Ov3rwatch/pen/wFiqE
full background image with screen on top
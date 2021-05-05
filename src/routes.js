    import Home from './components/Home.vue';
    import Forms from './components/Forms.vue';
    import Crud from './components/crud.vue';
    import GraphQL from './components/graphql.vue';
    import Cards from './components/MagicList.vue';
    // import Blue from './components/Blue.vue';
    // import Red from './components/Red.vue';

    export const routes = [
        { path: '', component: Home },
        { path: '/forms', component: Forms },
        { path: '/cards', component: Cards },
        { path: '/crud', component: Crud },
        { path: '/graphql', component: GraphQL },
        // { path: '/blue', component: Blue },
        // { path: '/red', component: Red },
    ]
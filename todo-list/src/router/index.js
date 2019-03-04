import Vue from 'vue';
import VueRouter from 'vue-router';
import All from '../pages/all.vue';
import OneThing from '../pages/onething.vue';
import Edit from '../pages/edit.vue';

Vue.use(VueRouter);

export default new VueRouter({
    // mode: 'hash',
    routes: [{
            path: '/',
            component: OneThing
                // component: All
                // component: Edit
        },
        {
            path: '/all/:pattern', //动态路径参数，以冒号开头
            component: All
        },
        {
            path: '/edit/:pattern',
            component: Edit
        }
    ]

})
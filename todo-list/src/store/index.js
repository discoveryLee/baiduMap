import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
    option: {
        btnClass: 'add',
        btnName: 'Add',
        select: 'onething',
        cancelShow: false,
        controlBar: false
    },
    todoData: []
};
const mutations = {
    addItem(state, payload) {
        if (payload.prior !== '-1' && payload.status !== '-1' && payload.content !== '') {
            state.todoData.push(payload);
        }

    },
    editItem(state, payload) {
        if (payload.todoData.content !== '') {
            Vue.set(state.todoData, payload.index, payload.todoData); //Vue.set( target, key, value ) ES6语法：数组的keys()即索引
        }
    },
    deleteItem(state, payload) {
        Vue.delete(state.todoData, payload.index);
    },
    changeOptions(state, option) {
        if (option.hasOwnProperty('select')) {
            state.option.select = option.select
        }
        if (option.hasOwnProperty('btnName')) {
            state.option.btnName = option.btnName
        }
        if (option.hasOwnProperty('btnClass')) {
            state.option.btnClass = option.btnClass
        }
        if (option.hasOwnProperty('setCancel')) {
            state.option.cancelShow = option.setCancel
        }
        if (option.hasOwnProperty('setBar')) {
            state.option.controlBar = option.setBar
        }
    }
};

const store = new Vuex.Store({
    state,
    mutations
})
export default store;
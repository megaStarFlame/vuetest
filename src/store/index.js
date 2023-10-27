import Vuex from "vuex";
import Vue from "vue";
Vue.use(Vuex);

const state={
    num:1,
}

const mutations={
    addOne(state){
        state.num++;
    }
}

const actions={
    addOne(context){
        context.commit("addOne");
    }
}

const store={
    state,
    actions,
    mutations
}

export default store;
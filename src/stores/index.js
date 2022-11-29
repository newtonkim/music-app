import { createStore } from 'vuex';

export default createStore({
    state: {
        authModalShow:false,
    },
    // mutation come as functions and they are locally methods
    mutations: {
        toggleAuthModal: (state) => {
            state.authModalShow = !state.authModalShow;
        }
    },
    getters: {
        // computed properties
        authModalShow: (state) => {
            return state.authModalShow;
        }
    },
    actions: {

    },
    modules: {
        
    }

});
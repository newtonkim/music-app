import { createStore } from 'vuex';
import { auth, usersCollection } from '../includes/firebase';

export default createStore({
    state: {
        authModalShow: false,
        userLoggedIn: false
    },
    // mutation come as functions and they are locally methods
    mutations: {
        toggleAuthModal: (state) => {
            state.authModalShow = !state.authModalShow;
        },

        toggleAuth(state) {
            state.userloggedIn = !state.userLoggedIn;
        }
    },

    actions: {
        async register({ commit }, payload) {
            const userCred = await auth.createUserWithEmailAndPassword(payload.email, payload.password);

            await usersCollection.doc(userCred.user.uid).set({
                name: payload.name,
                email: payload.email,
                age: payload.age,
                country: payload.country,
            });

            await userCred.user.updateProfile({
                displayName: payload.name,
            });

            //  from the store responsible for toggling the login and logout
            commit('toggleAuth');
        }

       
    },

    getters: {
        // computed properties
        authModalShow: (state) => {
            return state.authModalShow;
        }
    },
});
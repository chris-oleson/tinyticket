import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
    state: () => ({
        name: '',
        isLoggedIn: false,
        subscriptionStatus: 'Free',
        reauthenticate: false,
        theme: 0,

        notification: {
            text: '',
            color: ''
        },

        allItems: [],
        allItemHistory: [],
    }),
    
    persist: false,
})
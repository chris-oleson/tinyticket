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

        selectedView: 0,
        views: [
            {
                name: "Chris' Tickets",
                filters: {
                    assignedTo: 'Me',
                    status: [
                        'New',
                        'In Progress',
                    ]
                }
            },
            {
                name: 'All Tickets',
                filters: {
                    assignedTo: 'Any',
                    status: [
                        'New',
                        'In Progress',
                        'Awaiting Response'
                    ]
                }
            },
            {
                name: 'Unassigned Tickets',
                filters: {
                    assignedTo: 'None',
                    status: [
                        'New',
                        'In Progress',
                        'Completed',
                    ]
                }
            },
        ],
    }),
    
    persist: false,
})
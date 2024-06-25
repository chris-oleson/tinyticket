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

        tickets: [
            {
                id: 1,
                created: '2/19/2024, 8:02:27 AM',
                updated: '2/19/2024, 8:02:27 AM',
                contacts: ['Jeff Jones'],
                subject: 'Please Help',
                contents: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
                assignedTo: ['Me'],
                read: true
            },
            {
                id: 2,
                created: '2/19/2024, 8:02:27 AM',
                updated: '2/19/2024, 8:02:27 AM',
                contacts: ['Mark Smith', 'Bilbo Baggins'],
                subject: 'AAAAHHH',
                contents: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
                assignedTo: ['Me', 'Bilbo Baggins'],
                read: false
            }
        ]
    }),
    
    persist: false,
})
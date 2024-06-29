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


        // Mock data
        views: [
            {
                id: 1,
                position: 0,
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
                id: 2,
                position: 1,
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
                id: 3,
                position: 2,
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
                details: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
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
                details: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
                assignedTo: ['Me', 'Bilbo Baggins'],
                read: false
            }
        ],

        people: ['Me', 'Bilbo Baggins', 'Gollum', 'Thorin Oakenshield']
    }),
    
    persist: false,
})
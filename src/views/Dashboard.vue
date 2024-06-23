<template>
    <v-card elevation="4" class="ma-8 pa-8">
        <div style="width: 300px">
            <v-text-field v-model="search" density="compact" prepend-inner-icon="mdi-magnify" label="Search" single-line variant="outlined" hide-details></v-text-field>
        </div>

        <v-data-table :search="search" :headers="headers" :items="tickets" class="font-weight-light mt-4" items-per-page-text="Show" hover @click:row="showTicket"></v-data-table>
    </v-card>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useStore } from '/src/pinia'
const store = useStore()
const search = ref('')

const headers = [
    {
        key: 'createdOn',
        title: 'Created On',
        minWidth: '180px'
    },
    {
        key: 'contact',
        title: 'Contact',
        minWidth: '180px'
    },
    {
        key: 'subject',
        title: 'Subject',
    },
    {
        key: 'assignedTo',
        title: 'Assigned To',
        minWidth: '180px',
        align: 'end',
    }
]

function showTicket(event, row) {
    console.log(row.item)
}

const tickets = [
    {
        id: 1,
        createdOn: '2/19/2024, 8:02:27 AM',
        contact: ['Jeff Jones'],
        subject: 'Please Help',
        contents: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        assignedTo: 'Me'
    },
    {
        id: 2,
        createdOn: '2/19/2024, 8:02:27 AM',
        contact: ['Mark Smith'],
        subject: 'AAAAHHH',
        contents: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`,
        assignedTo: 'Me'
    }
]
</script>
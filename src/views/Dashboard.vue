<template>
    <v-card elevation="4" class="ma-8 pa-8">
        <div style="width: 300px">
            <v-text-field v-model="search" density="compact" prepend-inner-icon="mdi-magnify" label="Search" single-line variant="outlined" hide-details></v-text-field>
        </div>

        <v-data-table :search="search" :headers="headers" :items="tickets" class="font-weight-light mt-4" items-per-page-text="Show"></v-data-table>
    </v-card>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useStore } from '/src/pinia'
const store = useStore()

const search = ref('')
const page = ref(1)
const itemsPerPage = 10
const pageCount = computed(() => {
    return Math.ceil(logs.length / itemsPerPage)
})

function getColor(type) {
    for (let logType of store.logTypes) {
        if (logType.name.toLowerCase() == type.toLowerCase()) {
            return logType.color
        }
    }
    return '#fff'
}

const headers = [
    {
        key: 'createdOn',
        title: 'Created On',
        minWidth: '180px'
    },
    {
        key: 'createdBy',
        title: 'Created By',
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

const tickets = [
    {
        createdOn: '2/19/2024, 8:02:27 AM',
        createdBy: 'Jeff Jones',
        subject: 'Please Help',
        contents: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        assignedTo: 'Me'
    },
    {
        createdOn: '2/19/2024, 8:02:27 AM',
        createdBy: 'Mark Smith',
        subject: 'AAAAHHH',
        contents: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        assignedTo: 'Me'
    }
]
</script>
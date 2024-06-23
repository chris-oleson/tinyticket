<template>
    <v-card elevation="4" class="ma-8 pa-8">
        <div style="width: 300px">
            <v-text-field v-model="search" density="compact" prepend-inner-icon="mdi-magnify" label="Search" single-line variant="outlined" hide-details></v-text-field>
        </div>

        <v-data-table :search="search" :headers="headers" :items="store.tickets" class="font-weight-light mt-4" items-per-page-text="Show" hover>
            <template v-slot:item="{ item }">
                <tr @click="router.push('/ticket/' + item.id)">
                    <td>{{ item.createdOn }}</td>
                    <td>{{ parseArray(item.contact) }}</td>
                    <td>{{ item.subject }}</td>
                    <td>{{ parseArray(item.assignedTo) }}</td>
                </tr>
            </template>
        </v-data-table>
    </v-card>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from '/src/pinia'
const store = useStore()
const search = ref('')
import {useRouter } from 'vue-router'
const router = useRouter()

function parseArray(array) {
    return array.join(", ")
}

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

</script>
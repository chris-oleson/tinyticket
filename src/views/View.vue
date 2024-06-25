<template>
    <v-card elevation="4" class="ma-4 pa-4">
        <v-row class="align-center ma-0">
            <v-col cols="6">
                <v-text-field v-model="search" density="compact" prepend-inner-icon="mdi-magnify" label="Search" single-line variant="outlined" hide-details></v-text-field>
            </v-col>
            <v-col cols="6" class="text-right">
                <v-btn icon="mdi-content-save" variant="plain"></v-btn>
            </v-col>
        </v-row>

        <v-data-table :search="search" :headers="headers" :items="store.tickets" class="font-weight-light mt-4" items-per-page-text="Show" hover>
            <template v-slot:item="{ item }">
                <tr @click="router.push('/ticket/' + item.id)" :class="item.read ? 'font-weight-light' : 'font-weight-bold'">
                    <td>{{ item.created }}</td>
                    <td>{{ parseArray(item.contacts) }}</td>
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
        key: 'created',
        title: 'Created On',
    },
    {
        key: 'contacts',
        title: 'Contacts',
    },
    {
        key: 'subject',
        title: 'Subject',
    },
    {
        key: 'assignedTo',
        title: 'Assigned To',
    }
]

</script>
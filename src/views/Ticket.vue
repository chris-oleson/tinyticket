<template>
    <v-container fluid>
        <v-row>
            <v-col cols="4">
                <v-card class="pa-8 font-weight-light">
                    <div class="text-subtitle-2">Subject </div>
                    <div class="text-h6 font-weight-light mb-4">{{ ticket.subject }}</div>
                    <div class="text-subtitle-2">Contacts: </div>
                    <div class="text-h6 font-weight-light mb-4">{{ parseArray(ticket.contacts) }}</div>
                    <div class="text-subtitle-2">Assigned To: </div>
                    <div class="text-h6 font-weight-light mb-4">{{ parseArray(ticket.assignedTo) }}</div>
                </v-card>
            </v-col>
            <v-col cols="8">
                <v-card class="pa-8 font-weight-light">
                    <div>{{ ticket.contents }}</div>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { useStore } from '/src/pinia'
const store = useStore()
import {useRoute } from 'vue-router'
const route = useRoute()

function parseArray(array) {
    return array.join(", ")
}

// backend request
const ticket = store.tickets.find(t => t.id == route.params.ticket)
if (!ticket.read) {
    ticket.read = true
}
</script>
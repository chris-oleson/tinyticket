<template>
    <v-card elevation="4" class="ma-4 pa-4">
        <v-row class="ma-0">
            <v-col class="text-right">
                <v-btn v-if="!editing" icon="mdi-pencil" variant="plain" @click="editing = true"></v-btn>
                <v-btn v-if="editing" icon="mdi-content-save" variant="plain" @click="editing = false"></v-btn>
                <v-btn v-if="editing" icon="mdi-cancel" variant="plain" @click="editing = false"></v-btn>
            </v-col>
        </v-row>

        <v-row class="ma-0">
            <v-col cols="4">
                <div class="text-subtitle-2">Subject</div>
                <v-text-field density="compact" :variant="editing ? 'underlined' : 'plain'">{{ ticket.subject }}</v-text-field>
                <div class="text-subtitle-2">Contacts</div>
                <div v-if="!editing" class="text-h5 font-weight-light mb-4">{{ parseArray(ticket.contacts) }}</div>
                <v-text-field v-else density="compact"></v-text-field>
                <div class="text-subtitle-2">Assigned To</div>
                <div v-if="!editing" class="text-h5 font-weight-light mb-4">{{ parseArray(ticket.assignedTo) }}</div>
                <v-text-field v-else density="compact"></v-text-field>
            </v-col>

            <v-col cols="8">
                <div class="text-subtitle-2">Details</div>
                <div>{{ ticket.details }}</div>
            </v-col>
        </v-row>
    </v-card>
</template>

<script setup>
import { ref } from 'vue'
import { useStore } from '/src/pinia'
const store = useStore()
import {useRoute } from 'vue-router'
const route = useRoute()

const editing = ref(false)
const subject = ref('')
const contacts = ref([])
const details = ref('')
const assignedTo = ref([])

function parseArray(array) {
    return array.join(", ")
}

// backend request
const ticket = store.tickets.find(t => t.id == route.params.ticket)
if (!ticket.read) {
    ticket.read = true
}
</script>
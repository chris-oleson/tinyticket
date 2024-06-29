<template>
    <v-card elevation="4" class="ma-4 pa-4">
        <v-row class="ma-0">
            <v-col cols="4">
                <v-text-field label="Subject" :model-value="ticket.subject" variant="underlined"></v-text-field>
                <v-select label="Contacts" multiple chips :variant="'plain'" :model-value="ticket.contacts" :items="store.people"></v-select>
                <v-select label="Assigned To" multiple chips :variant="'plain'" :model-value="ticket.assignedTo" :items="store.people"></v-select>
            </v-col>

            <v-col cols="8">
                <div class="text-right">
                    <v-btn v-if="!editing" icon="mdi-pencil" variant="plain" @click="editing = true"></v-btn>
                    <v-btn v-if="editing" icon="mdi-content-save" variant="plain" @click="editing = false"></v-btn>
                    <v-btn v-if="editing" icon="mdi-cancel" variant="plain" @click="editing = false"></v-btn>    
                </div>
                <div class="text-subtitle-2">Details</div>
                <v-textarea auto-grow spellcheck="false" density="compact" variant="underlined" v-model="ticket.details"></v-textarea>
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
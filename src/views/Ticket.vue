<template>
    <v-card elevation="4" class="ma-4">
        <v-row class="ma-0">
            <v-col>
                <v-text-field label="Subject" v-model="subject" :variant="editing ? 'outlined' : 'plain'" hide-details :readonly="!editing"></v-text-field>
            </v-col>
            <v-col class="text-right">
                <v-btn v-if="!editing" icon="mdi-pencil" variant="plain" @click="editing = true"></v-btn>
                <v-btn v-if="editing" icon="mdi-content-save" variant="plain" @click="saveEdit"></v-btn>
                <v-btn v-if="editing" icon="mdi-cancel" variant="plain" @click="cancelEdit"></v-btn>
            </v-col>
        </v-row>

        <v-divider></v-divider>

        <v-row class="ma-0">
            <v-col cols="2">
                <v-select label="Organization" :variant="editing ? 'outlined' : 'plain'" :readonly="!editing" v-model="organization" :items="store.organizations"></v-select>
                <v-select label="Contacts" multiple chips :variant="editing ? 'outlined' : 'plain'" :readonly="!editing" v-model="contacts" :items="store.people"></v-select>
                <v-select label="Assigned To" multiple chips :variant="editing ? 'outlined' : 'plain'" :readonly="!editing" v-model="assignedTo" :items="store.people" readonly></v-select>
            </v-col>
            <div>
                <v-divider vertical></v-divider>
            </div>
            <v-col>
                <v-textarea class="mt-2" label="Details" auto-grow spellcheck="false" density="compact" :variant="editing ? 'outlined' : 'plain'" :readonly="!editing" v-model="details"></v-textarea>
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

// backend request
const ticket = store.tickets.find(t => t.id == route.params.ticket)
if (!ticket.read) {
    ticket.read = true
}
const editing = ref(false)
const subject = ref(ticket.subject)
const organization = ref(ticket.organization)
const contacts = ref(ticket.contacts)
const details = ref(ticket.details)
const assignedTo = ref(ticket.assignedTo)

function saveEdit() {
    ticket.subject = subject.value
    ticket.organization = organization.value
    ticket.contacts = contacts.value
    ticket.details = details.value
    ticket.assignedTo = assignedTo.value
    editing.value = false
}

function cancelEdit() {
    subject.value = ticket.subject
    organization.value = ticket.organization
    contacts.value = ticket.contacts
    details.value = ticket.details
    assignedTo.value = ticket.assignedTo
    editing.value = false
}
</script>
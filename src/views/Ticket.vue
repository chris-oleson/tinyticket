<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card class="pa-8 text-center">
                    <div>{{ ticket.subject }}</div>
                    <div>{{ ticket.contact }}</div>
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

// fake backend request
const ticket = store.tickets.find(t => t.id == route.params.ticket)

</script>
<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card class="pa-8 text-center">

                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { defineProps } from 'vue'
import { useStore } from '/src/pinia'
const store = useStore()
const props = defineProps([
    'id',
    'subject',
    'assignedTo',
    'contact',
    'content'
])
</script>
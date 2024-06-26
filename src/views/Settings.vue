<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card class="pa-8 text-center">
                    <v-table>
                        <tbody>
                            <tr>
                                <td></td>
                                <td></td>
                                <td>Views</td>
                                <td width="30px">
                                    <v-btn icon="mdi-plus" variant="plain" @click="addView"></v-btn>
                                </td>
                            </tr>
                            <tr v-for="view, index in store.views" :key="view.name">
                                <td width="30px" class="pa-0">
                                    <v-btn icon="mdi-menu-up" variant="plain" @click="moveUp(view, index)"></v-btn>
                                </td>
                                <td width="30px" class="pa-0">
                                    <v-btn icon="mdi-menu-down" variant="plain" @click="moveDown(view, index)"></v-btn>
                                </td>
                                <td class="pa-0">
                                    <v-text-field :model-value="view.name" variant="outlined" density="compact" hide-details @change="view.name = $event.target.value"/>
                                </td>
                                <td width="30px" class="pa-0">
                                    <v-btn @click="store.views.splice(store.views.indexOf(view), 1)" icon="mdi-delete" variant="plain"></v-btn>
                                </td>
                            </tr>
                        </tbody>
                    </v-table>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script setup>
import { computed } from 'vue'
import { useStore } from '/src/pinia'
const store = useStore()

function addView() {
    // Backend request
    store.views.push({
        name: "New View",
        filters: {
            assignedTo: 'Any',
            status: [
                'New',
                'In Progress',
                'Awaiting Response'
            ]
        }
    })
}

function moveDown(view, index) {
    if (index < store.views.length - 1) {
        store.views[index].position++
        store.views[index + 1].position--
        moveElement(store.views, index, index + 1)
    }
}

function moveUp(view, index) {
    if (index > 0) {
        store.views[index].position--
        store.views[index - 1].position++
        moveElement(store.views, index, index - 1)
    }
}

function moveElement(array, from, to) {
    array.splice(to, 0, array.splice(from, 1)[0]);
}
</script>
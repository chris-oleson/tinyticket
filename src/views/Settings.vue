<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card class="pa-8 text-center">
                    <div>Views</div>
                    <v-table>
                        <tbody>
                            <tr v-for="view in store.views" :key="view.name">
                                <td>
                                    <v-text-field :model-value="view.name" variant="outlined" density="compact" hide-details @change="view.name = $event.target.value"/>
                                </td>
                                <td width="50px">
                                    <v-btn class="ma-2" @click="store.views.splice(store.views.indexOf(view), 1)" icon="mdi-delete" size="small" variant="tonal"></v-btn>
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
import { useStore } from '/src/pinia'
const store = useStore()
</script>
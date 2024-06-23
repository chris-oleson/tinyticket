<template>
    <v-app>
        <TopBar/>
        <SideBar v-if="!route.path.includes('/ticket/')"/>
        <v-main>
            <router-view/>
            <v-snackbar v-model="showNotification" :color="notificationColor" app transition="slide-y-transition" timeout="3000">
                <template v-slot:text>
                    <div class="text-center">{{ notificationText }}</div>
                </template>
            </v-snackbar>
        </v-main>
    </v-app>
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import { useStore } from '/src/pinia'
const store = useStore()
import { useTheme } from 'vuetify'
const theme = useTheme()
import {useRoute } from 'vue-router'
const route = useRoute()
import TopBar from '/src/components/TopBar'
import SideBar from '/src/components/SideBar'

// Update site title when page changes
watch(route, (newRoute) => {
    document.title = newRoute.meta.title ? newRoute.meta.title : store.views[store.selectedView].name + " - TinyTicket"
})

// Update current theme
setTheme()
watch(() => store.theme, () => {
    setTheme()
})

function setTheme() {
    if (store.theme == 1) {
        theme.global.name.value = 'light'
    }
    else if (store.theme == 2) {
        theme.global.name.value = 'dark'
    }
    else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        theme.global.name.value = 'dark'
    }
    else {
        theme.global.name.value = 'light'
    }
}

// Handling notifications
const showNotification = ref(false)
const notificationColor = ref('')
const notificationText = ref('')
watch(() => store.notification, (newNotification) => {
    if (newNotification.text) {
        notificationText.value = newNotification.text
        notificationColor.value = newNotification.color
        showNotification.value = true
    }
})
</script>

<style>
/* Removing default link styling */
a {
    color: inherit;
    text-decoration: inherit;
}
</style>
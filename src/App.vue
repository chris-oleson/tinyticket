<template>
    <v-app>
        <TopBar/>
        <SideBar/>
        <v-main>
            <router-view/>
            <v-snackbar v-model="showNotification" :color="store.notification.color" app transition="slide-y-transition" timeout="3000">{{ store.notificationText }}</v-snackbar>
        </v-main>
    </v-app>
</template>

<script setup>
import { ref, watch, computed } from 'vue'
import { useStore } from '/src/pinia'
const store = useStore()
import { useTheme } from 'vuetify'
const theme = useTheme()
import TopBar from '/src/components/TopBar'
import SideBar from '/src/components/SideBar'

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
watch(() => store.notification, (newNotification) => {
    showNotification.value = true
})
</script>

<style>
/* Removing default link styling */
a {
    color: inherit;
    text-decoration: inherit;
}
</style>
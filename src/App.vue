<template>
  <v-app>
    <v-layout>
      <v-app-bar color="blue-darken-2">
        <v-app-bar-nav-icon
          variant="text"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>

        <v-spacer />
        <LocaleChanger />
      </v-app-bar>
      <v-navigation-drawer color="blue-lighten-2" v-model="drawer" floating>
        <v-list density="compact" nav>
          <v-list-item
            prepend-icon="mdi-view-dashboard"
            title="Home"
            value="home"
            to="/"
            exact
          >
          </v-list-item>
          <v-list-item
            prepend-icon="mdi-forum"
            title="About"
            value="about"
            to="/about"
            exact
          >
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      <v-main>
        <router-view />
      </v-main>
    </v-layout>
  </v-app>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import LocaleChanger from "./components/LocaleChanger.vue";

const drawer = ref(false);
</script>

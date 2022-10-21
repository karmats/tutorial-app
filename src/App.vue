<template>
  <v-app>
    <v-layout>
      <v-app-bar color="blue-darken-2" flat>
        <v-app-bar-nav-icon
          class="hidden-md-and-up"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>

        <router-link to="/" class="d-inline-block ms-4 me-2">
          <img
            class="logo-img"
            src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-slim-text-dark.svg"
            transition="scale-transition"
            alt="Vuetify logo"
          />
        </router-link>

        <v-tabs height="inherit" class="hidden-sm-and-down">
          <v-tab to="/">Home</v-tab>
          <v-tab to="/about">About</v-tab>
        </v-tabs>
        <v-spacer />

        <LocaleChanger />
      </v-app-bar>
      <v-navigation-drawer
        color="blue-lighten-2"
        class="hidden-md-and-up"
        v-model="drawer"
        floating
      >
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

<style scoped>
.logo-img {
  max-width: 148px;
  max-height: 34px;
}
</style>

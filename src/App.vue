<template>
  <v-app>
    <v-layout>
      <v-app-bar flat>
        <v-app-bar-nav-icon
          class="hidden-md-and-up"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>

        <!-- <router-link to="/" class="d-inline-block ms-4 me-2">
          <v-img
            class="logo-img"
            src="src/assets/mcss_logo.svg"
            transition="scale-transition"
            alt="Vuetify logo"
          />
        </router-link> -->

        <v-tabs class="hidden-sm-and-down">
          <v-tab to="/">Home</v-tab>
          <v-tab to="/about">About</v-tab>
          <v-tab to="/test">Test</v-tab>
        </v-tabs>
        <v-spacer />

        <LocaleChanger />
      </v-app-bar>
      <v-navigation-drawer class="hidden-md-and-up" v-model="drawer" floating>
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
          <v-list-item
            prepend-icon="mdi-lightbulb"
            title="Test"
            value="test"
            to="/test"
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
/*.logo-img {
  max-width: 148px;
  max-height: 34px;
  min-width: 132px;
}*/
.v-tabs {
  --v-tabs-height: 64px;
}
</style>

<template>
  <v-app>
    <v-layout>
      <v-app-bar color="blue-darken-2">
        <v-row>
          <v-col cols="10"></v-col>
          <v-col cols="2">
            <LocaleChanger />
          </v-col>
        </v-row>
      </v-app-bar>
      <v-navigation-drawer color="blue-lighten-2" floating permanent>
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
import LocaleChanger from "./components/LocaleChanger.vue";
</script>

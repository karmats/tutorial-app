<template>
  <v-app>
    <v-layout>
      <v-app-bar flat>
        <v-app-bar-nav-icon
          class="hidden-md-and-up"
          @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>

        <v-tabs class="hidden-sm-and-down">
          <v-tab to="/">Home</v-tab>
          <v-tab to="/about">About</v-tab>
          <v-tab to="/test">Test</v-tab>
          <v-tab to="/forms">Form lab</v-tab>
          <v-tab to="/iframe">IFrame</v-tab>
          <v-tab to="/graphs">Graphs</v-tab>
          <v-tab to="/apex">Apex Graphs</v-tab>
          <v-tab to="/chartjs">ChartJS Graphs</v-tab>
        </v-tabs>

        <v-spacer />

        <DarkThemeSwitch />
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
          <v-list-item
            prepend-icon="mdi-file-document-outline"
            title="Forms"
            value="forms"
            to="/forms"
            exact
          >
          </v-list-item>
          <v-list-item
            prepend-icon="mdi-application-braces-outline"
            title="IFrame"
            value="iframe"
            to="/iframe"
            exact
          >
          </v-list-item>
          <v-list-item
            prepend-icon="mdi-chart-bar"
            title="Graphs"
            value="graphs"
            to="/graphs"
            exact
          >
          </v-list-item>
          <v-list-item
            prepend-icon="mdi-chart-bell-curve-cumulative"
            title="Apex graphs"
            value="apex"
            to="/apex"
            exact
          >
          </v-list-item>
          <v-list-item
            prepend-icon="mdi-chart-box-outline"
            title="ChartJS graphs"
            value="chartjs"
            to="/chartjs"
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
import DarkThemeSwitch from "./components/DarkThemeSwitch.vue";
import LocaleChanger from "./components/LocaleChanger.vue";

const drawer = ref(false);
</script>

<style scoped>
.v-tabs {
  --v-tabs-height: 64px;
}
</style>

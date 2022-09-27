<template>
  <v-app>
    <v-navigation-drawer floating permanent>
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
  </v-app>
</template>

<template>
  <nav>
    <v-app-bar flat app>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">Dmojis</span>
        <span> Changelogs</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn @click="Dmojis" text color="grey">
        <span>DMOJIS.com</span>
        <v-icon right>mdi-arrow-right-bold-box-outline</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer absolute temporary v-model="drawer" class="darken-1">
      <v-banner class="text-uppercase">
        <span class="font-weight-light">Dmojis</span>
        <span> Changelogs</span>
      </v-banner>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="white--text text--accent-4">
          <router-link to="/">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-home</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/changelogs">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-bell</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Changelogs</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/notifications">
            <v-list-item>
                <v-list-item-icon>
                  <v-icon>mdi-email-multiple</v-icon>
                </v-list-item-icon>
                <v-list-item-title>Notifications</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/suggestions">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-comment-question</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Suggestions</v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      group: null,
    };
  },
  methods: {
    Dmojis() {
      window.open('https://dmojis.com');
    },
  },
};
</script>

<style lang="scss">
.intro {
  display: flex;
  justify-content: center;
  margin: 4rem 0;
}

a {
  color: inherit;
}

.text-center {
  text-align: center;
}
a {
  text-decoration: none;
  &.router-link-exact-active, &.router-link-active {
    background: white !important;
    color: rgba(0, 0, 0, 0.85) !important;
  }
}
.v-application .deep-purple--text.text--accent-4 {
  color: rgba(255, 255, 255, 0.90) !important;
  caret-color: white !important;
}
</style>

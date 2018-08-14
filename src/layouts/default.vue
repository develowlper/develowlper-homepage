<template>
  <v-app>
    <v-navigation-drawer 
      app
      fixed
      clipped
    >
    <v-list>
      <v-list-tile
        nuxt
        to="/components"
      >
        <v-list-tile-action>
          <v-icon>settings_input_component</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>Components</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
    </v-navigation-drawer>
    <v-toolbar app absolute clipped-left>
      <v-btn icon to="/">
        <v-icon>home</v-icon>
      </v-btn>    
      <nuxt-link class="no-link" to="/">
        <v-toolbar-title>develowlper</v-toolbar-title>
      </nuxt-link>
      <v-spacer />
      <v-btn to="/auth/sign-in">
        Login
      </v-btn>
    </v-toolbar>
    <v-content>
      <v-container fluid>
        <nuxt/>
      </v-container>
    </v-content>
    <v-footer app>
      <span>
        &#169; 2018 Daniel Schulz <nuxt-link to="impress">Impressum</nuxt-link>
      </span>
       
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer : true
    }
  }
}
</script>

<style scoped>
  .no-link {
    text-decoration:none;
    color: black;
  }
</style>



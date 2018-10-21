<template>
  <v-navigation-drawer
    :value="mobileNavDrawer"
    app clipped fixed temporary stateless>
  <v-toolbar flat class="darkBlue">
    <v-list>
      <v-list-tile>
        <v-list-tile-title class="title white--text">
          Alicia Singletary
        </v-list-tile-title>
      </v-list-tile>
    </v-list>
    <v-spacer />
     <v-toolbar-items>
       <v-icon
       class="white--text cursor-my-pointer"
       medium
       @click="toggleNavDrawer">
        arrow_back_ios
      </v-icon>
     </v-toolbar-items>
  </v-toolbar>

  <v-divider></v-divider>

  <v-list dense class="pt-0">
    <v-list-tile
      v-for="item in items"
      :key="item.title"
      @click="$router.push(item.route)"
    >
      <v-list-tile-action>
        <v-icon>{{ item.icon }}</v-icon>
      </v-list-tile-action>

      <v-list-tile-content>
        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
      </v-list-tile-content>
    </v-list-tile>
  </v-list>
</v-navigation-drawer>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'CustomNavDrawer',
  components: {

  },
  data () {
    return {
      items: [
        { title: 'Home', icon: '/' },
        { title: 'About', icon: '/about' },
        { title: 'Portfolio', icon: '/portfolio' },
        { title: 'Contact', icon: '/contact' },
        { title: 'Resume', icon: '/resume' }
      ]
    }
  },
  computed: {
    ...mapGetters([
      'getNavDrawer'
    ]),
    mobileNavDrawer () {
      return this.getNavDrawer
    }
  },
  methods: {
    ...mapActions(['toggleNavDrawer'])
  }
}
</script>

<style scoped>
  .cursor-my-pointer {
    cursor: pointer;
  }
</style>

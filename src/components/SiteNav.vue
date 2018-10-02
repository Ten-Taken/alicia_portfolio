<template>
  <v-layout row>
    <v-flex xs12>
      <div>
        <v-toolbar
          color="cyan"
          dark
          tabs
        >
          <v-avatar
            :tile="false"
            :size="avatarSize"
            color="grey lighten-4"
            class=" ml-0"
          >
            <img :src="aliciaAvatar" alt="avatar">
          </v-avatar>
          <v-spacer></v-spacer>

          <v-tabs
            v-model="tabsModel"
            right
            color="cyan"
            slider-color="yellow"
          >
            <v-tab
              v-for="(section, index) in navSections"
              :key="index"
              :href="`#tab-${section.name}`"
              :to="section.route"
            >
              {{ section.name }}
            </v-tab>
          </v-tabs>
        </v-toolbar>
      </div>
    </v-flex>
  </v-layout>

</template>

<script>
import AliciaAvatar from '@/assets/avatar.jpg'

export default {
  name: 'SiteNav',
  components: {

  },
  data () {
    return {
      appTitle: 'Alicia Singletary',
      tabsModel: null,
      avatarSize: '62'
    }
  },
  computed: {
    aliciaAvatar () {
      return AliciaAvatar
    },
    navSections () {
      let sectionArray

      sectionArray = [
        {
          name: 'Home',
          route: '/home'
        },
        {
          name: 'About',
          route: '/about'
        },
        {
          name: 'Portfolio',
          route: '/portfolio'
        },
        {
          name: 'Contact',
          route: '/contact'
        },
        {
          name: 'Resume',
          route: '/resume'
        }
      ]
      return sectionArray
    }
  },
  methods: {

  }
}
</script>

<style scoped>
  .custom-font {
    font-family: sans-serif !important;
  }
</style>

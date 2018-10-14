<template>
  <v-layout row>
    <v-flex xs12>
      <div>
        <v-toolbar
          color="darkBlue"
          dark
          tabs
        >
          <v-spacer></v-spacer>

          <v-tabs
            v-model="tabsModel"
            right
            color="darkBlue"
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
export default {
  name: 'SiteNav',
  components: {

  },
  data () {
    return {
      appTitle: 'Alicia Singletary',
      tabsModel: null
    }
  },
  computed: {
    navSections () {
      let sectionArray

      sectionArray = [
        {
          name: 'Home',
          route: '/'
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

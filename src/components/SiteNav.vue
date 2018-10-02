<template>
  <div>
  <v-toolbar
    color="cyan"
    dark
    tabs
  >
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-spacer></v-spacer>
    <v-toolbar-title
      :class="{
        'display-3': $vuetify.breakpoint.lgAndUp,
        'display-2': $vuetify.breakpoint.mdOnly,
        'headline': $vuetify.breakpoint.smAndDown
      }"
      class="custom-font">
      {{ appTitle }}
    </v-toolbar-title>

    <v-spacer></v-spacer>

    <v-tabs
      slot="extension"
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

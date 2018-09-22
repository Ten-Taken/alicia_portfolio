<template>
  <div>
  <v-toolbar
    color="cyan"
    dark
    tabs
  >
    <v-toolbar-side-icon></v-toolbar-side-icon>

    <v-toolbar-title>{{ appTitle }}</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>

    <v-btn icon>
      <v-icon>more_vert</v-icon>
    </v-btn>

    <v-tabs
      slot="extension"
      v-model="tabsModel"
      centered
      color="cyan"
      slider-color="yellow"
    >
      <v-tab
        v-for="(section, index) in navSections"
        :key="index"
        :href="`#tab-${section.name}`"
      >
        {{ section.name }}
      </v-tab>
    </v-tabs>
  </v-toolbar>

  <v-tabs-items v-model="tabsModel">
    <v-tab-item
      v-for="i in 3"
      :id="`tab-${i}`"
      :key="i"
    >
      <v-card flat>
        <v-card-text v-text="text"></v-card-text>
      </v-card>
    </v-tab-item>
  </v-tabs-items>
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
        {name: 'About'},
        {name: 'Portfolio'},
        {name: 'Contact'},
        {name: 'Resume'}
      ]
      return sectionArray
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>

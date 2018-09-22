<template>
  <v-layout row>
    <v-card xs10 offset-xs1 :height="homePageCardHeight">
      Hello from home page!
    </v-card>
  </v-layout>
</template>

<script>
export default {
  name: 'Home',
  components: {

  },
  data () {
    return {
      homePageCardHeight: 100 + '%'
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>

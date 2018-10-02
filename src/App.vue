<template>
  <v-app>
    <site-nav />
    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
import SiteNav from '@/components/SiteNav'

export default {
  data () {
    return {

    }
  },
  name: 'App',
  components: {
    SiteNav
  }
}
</script>

<style>

  .v-parallax__image {
    max-width: 100%;
    height: auto;
  }

</style>

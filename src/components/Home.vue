<template>
  <div>
    <hero-parallax />
    <!-- <v-card xs10 offset-xs1 :height="homePageCardHeight">
      Hello from home page!
    </v-card> -->
  </div>
</template>

<script>
import HeroParallax from '@/components/HeroParallax'

export default {
  name: 'Home',
  components: {
    HeroParallax
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

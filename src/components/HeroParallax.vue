<template>
  <v-img
    :aspect-ratio="16/9"
    :height="heroImageHeight"
    :src="heroImage">
    <v-layout pa-2 column fill-height class="lightbox white--text">
      <v-spacer></v-spacer>
      <v-flex class="text-xs-center">
        <div
          :class="{
            'display-1': $vuetify.breakpoint.mdAndUp,
            'headline': $vuetify.breakpoint.smOnly,
            'title': $vuetify.breakpoint.xsOnly
          }"
          class="shadow_outline white--text font-weight-bold">
          {{ tagline1 }} <br /> {{ tagline2 }}
        </div>
        <home-carousel />
        <!-- <v-btn outline large color="darkBlue">Open</v-btn> -->
      </v-flex>
    </v-layout>
  </v-img>
</template>

<script>
import { mapGetters } from 'vuex'
import HomeCarousel from '@/components/HomeCarousel'
import HeroImage from '@/assets/hero.jpg'

export default {
  name: 'HeroParallax',
  components: {
    HeroImage,
    HomeCarousel
  },
  data () {
    return {
      tagline1: 'I\'m here to create meaningful and lasting',
      tagline2: 'professional relationships.'
    }
  },
  computed: {
    heroImage () {
      return HeroImage
    },
    ...mapGetters([
      'getViewportHeight'
    ]),
    heroImageHeight () {
      if (this.$vuetify.breakpoint.smAndDown) {
        let height = this.getViewportHeight - 48
        return height
      } else {
        let height = this.getViewportHeight - 64
        return height
      }
    }
  },
  methods: {

  }
}
</script>

<style scoped>
  .shadow_outline {
    text-shadow: 2px 2px #000
  }
</style>

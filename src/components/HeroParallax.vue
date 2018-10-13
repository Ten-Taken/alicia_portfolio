<template>
  <v-img
    :aspect-ratio="16/9"
    :height="heroImageHeight"
    :src="heroImage">
    <!--     :height="heroImageHeight" -->
    <v-layout pa-2 column fill-height class="lightbox white--text">
      <v-spacer></v-spacer>
      <v-flex shrink class="text-xs-right">
        <div class="display-2 shadow_outline">Alicia Singletary</div>
        <div class="title pt-1 shadow_outline">singletary809@gmail.com</div>
      </v-flex>
    </v-layout>
  </v-img>
</template>

<script>
import { mapGetters } from 'vuex'
import HeroImage from '@/assets/hero.jpg'

export default {
  name: 'HeroParallax',
  components: {
    HeroImage
  },
  data () {
    return {

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
      let height = this.getViewportHeight - 64
      return height
    }
  },
  methods: {

  }
}
</script>

<style scoped>
  .shadow_outline {
    text-shadow: 3px 3px #000
  }
</style>

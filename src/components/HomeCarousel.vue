<template>
  <v-dialog
    v-model="dialog"
    :width="carouselWidth"
    >
    <v-btn
      slot="activator"
      outline
      color="darkBlue"
      fab
      large
    >
      <v-icon large color="darkBlue">camera_roll</v-icon>
    </v-btn>

    <v-card>
      <v-carousel>
        <v-carousel-item v-for="(item, i) in items" :key="i">
          <v-img
            :src="item.src"
            contain
          />
        </v-carousel-item>
      </v-carousel>

    </v-card>
  </v-dialog>
</template>

<script>
import Carousel0 from '@/assets/carousel0.jpg'
import Carousel1 from '@/assets/carousel1.jpg'
import Carousel2 from '@/assets/carousel2.jpg'
import Carousel3 from '@/assets/carousel3.jpg'
import Carousel4 from '@/assets/carousel4.jpg'
import Carousel5 from '@/assets/carousel5.jpg'
import Carousel6 from '@/assets/carousel6.jpg'
import Carousel7 from '@/assets/carousel7.jpg'

export default {
  name: 'HomeCarousel',
  components: {

  },
  data () {
    return {
      dialog: false,
      // items: [
      //   {
      //     src: this.carousel0
      //   },
      //   {
      //     src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
      //   },
      //   {
      //     src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
      //   },
      //   {
      //     src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
      //   }
      // ],
      carouselWidth: 800
    }
  },
  computed: {
    items () {
      return [
        {
          src: this.carousel0
        },
        {
          src: this.carousel1
        },
        {
          src: this.carousel2
        },
        {
          src: this.carousel3
        },
        {
          src: this.carousel4
        },
        {
          src: this.carousel5
        },
        {
          src: this.carousel6
        },
        {
          src: this.carousel7
        }
      ]
    },
    carousel0 () {
      return Carousel0
    },
    carousel1 () {
      return Carousel1
    },
    carousel2 () {
      return Carousel2
    },
    carousel3 () {
      return Carousel3
    },
    carousel4 () {
      return Carousel4
    },
    carousel5 () {
      return Carousel5
    },
    carousel6 () {
      return Carousel6
    },
    carousel7 () {
      return Carousel7
    }
  },
  methods: {

  }
}
</script>

<style scoped>
  .mySlides {display:none;}
</style>

<template>
  <v-dialog
    v-model="dialog"
    :width="carouselWidth">
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
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>

    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'HomeCarousel',
  components: {

  },
  data () {
    return {
      dialog: false,
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
        }
      ],
      carouselWidth: 800
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>

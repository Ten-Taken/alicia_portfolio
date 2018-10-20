<template>
  <v-layout row class="white">
  <v-flex xs12 sm12 md4 lg3 offset-md4 offset-lg4 class="mt-5 mb-5">
    <v-card class="darkBlue">
      <v-img
        :src="contactImage"
        contain
        height="350px"
      >
        <v-layout
          column
          fill-height
        >
        </v-layout>
      </v-img>

      <v-list two-line class="darkBlue">

        <v-list-tile @click="" class="white">
          <v-list-tile-action>
            <v-icon color="darkBlue">title</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>Alicia Singletary</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>


        <v-divider inset></v-divider>

        <v-list-tile @click="" class="white">
          <v-list-tile-action>
            <v-icon color="darkBlue">mail</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>singletary809@gmail.com</v-list-tile-title>
            <v-list-tile-sub-title>Personal</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>


        <v-divider inset></v-divider>

        <v-list-tile @click="" class="white">
          <v-list-tile-action>
            <v-icon color="darkBlue">location_on</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>San Marcos, TX</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-divider inset></v-divider>

        <v-list-tile @click="" class="white">
          <v-list-tile-action>
            <v-icon color="darkBlue">fab fa-linkedin</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>
              <a href="https://www.linkedin.com/in/alicia-singletary9030/" target="_blank">
                Alicia Singletary
              </a>
            </v-list-tile-title>
            <v-list-tile-sub-title>Visit my LinkedIn</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-card>
  </v-flex>
</v-layout>
</template>

<script>
import ContactImage from '@/assets/contact_me.jpg'

export default {
  name: 'Contact',
  components: {

  },
  data () {
    return {

    }
  },
  computed: {
    contactImage () {
      return ContactImage
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>

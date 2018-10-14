<template>
  <v-card class="white" :height="getViewportHeight" flat>
    <v-layout column>

      <!-- PROJECT (MC4326 Adv Social Media and Analytics)-->
      <v-flex>
        <v-card :width="projectCardWidth" :max-width="projectCardMaxWidth" class="mx-auto my-5">
          <v-img
            :src="project1Image"
            height="250px"
          >
          </v-img>

          <v-card-title primary-title>
            <div class="text-xs-center mx-auto">
              <div class="headline">MC4326 Adv Social Media and Analytics</div>
              <span class="grey--text">Expand for project links</span>
            </div>
          </v-card-title>

          <v-card-actions>

            <v-spacer></v-spacer>
            <v-btn icon large @click="show = !show">
              <v-icon large>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
            </v-btn>
            <v-spacer />
          </v-card-actions>

          <v-slide-y-transition>
            <v-card-text v-show="show">
              <ul class="text-xs-center">
                <li>
                  <a href="../../static/Report1.pdf" target="_blank">TXSSC Report 1</a>
                </li>
                <li>
                  <a href="../../static/Report2.pdf" target="_blank">TXSSC Report 2</a>
                </li>
                <li>
                  <a href="../../static/Report3.pdf" target="_blank">TXSSC Report 3</a>
                </li>
                <li>
                  <a href="../../static/GroupReport.pdf" target="_blank">Group Project 1</a>
                </li>
              </ul>
            </v-card-text>
          </v-slide-y-transition>
        </v-card>
      </v-flex>


      <!-- PROJECT (MC4328 Digital Media Innovation Capstone)-->
      <v-flex>
        <v-card :width="projectCardWidth" :max-width="projectCardMaxWidth" class="mx-auto my-5">
          <v-img
            :src="project2Image"
            height="250px"
          >
          </v-img>

          <v-card-title primary-title>
            <div class="text-xs-center mx-auto">
              <div class="headline">MC4328 Digital Media Innovation Capstone</div>
              <span class="grey--text">Expand for project links</span>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn large icon @click="show = !show">
              <v-icon large>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
            </v-btn>
            <v-spacer />
          </v-card-actions>

          <v-slide-y-transition>
            <v-card-text v-show="show">
              I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
            </v-card-text>
          </v-slide-y-transition>
        </v-card>
      </v-flex>


      <!-- PROJECT (MC4315 Web Design and Publishing)-->
      <v-flex>
        <v-card :width="projectCardWidth" :max-width="projectCardMaxWidth" class="mx-auto my-5">
          <v-img
            src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
            height="200px"
          >
          </v-img>

          <v-card-title primary-title>
            <div>
              <div class="headline">Top western road trips</div>
              <span class="grey--text">1,000 miles of wonder</span>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-btn flat>Share</v-btn>
            <v-btn flat color="purple">Explore</v-btn>
            <v-spacer></v-spacer>
            <v-btn icon @click="show = !show">
              <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
            </v-btn>
          </v-card-actions>

          <v-slide-y-transition>
            <v-card-text v-show="show">
              I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
            </v-card-text>
          </v-slide-y-transition>
        </v-card>
      </v-flex>

      <!-- PROJECT (4th TBD, Video Incoming)-->

    </v-layout>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
import AnalyticsPhoto from '@/assets/analytics_stock.jpg'
import SocialMediaPhoto from '@/assets/social_media_stock.jpg'

export default {
  name: 'Portfolio',
  components: {

  },
  data () {
    return {
      show: false,
      projectCardMaxWidth: '700',
      projectCardWidth: '100%'
    }
  },
  computed: {
    ...mapGetters([
      'getViewportHeight'
    ]),
    project1Image () {
      return AnalyticsPhoto
    },
    project2Image () {
      return SocialMediaPhoto
    }
  },
  methods: {

  }
}
</script>

<style scoped>
  ul {
    list-style-position: inside;
    text-align: left;
  }
</style>

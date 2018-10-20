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
            <v-btn icon large @click="showProject1 = !showProject1">
              <v-icon large>{{ showProject1 ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
            </v-btn>
            <v-spacer />
          </v-card-actions>

          <v-slide-y-transition>
            <v-card-text v-show="showProject1">
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
            <v-btn large icon @click="showProject2 = !showProject2">
              <v-icon large>{{ showProject2 ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
            </v-btn>
            <v-spacer />
          </v-card-actions>

          <v-slide-y-transition>
            <v-card-text v-show="showProject2">
              <ul class="text-xs-center">
                Coming Soon
              </ul>
            </v-card-text>
          </v-slide-y-transition>
        </v-card>
      </v-flex>


      <!-- PROJECT (MC4324 Visual Storytelling)-->
      <v-flex>
        <v-card :width="projectCardWidth" :max-width="projectCardMaxWidth" class="mx-auto my-5">
          <v-img
            :src="project3Image"
            height="200px"
          >
          </v-img>

          <v-card-title primary-title>
            <div class="text-xs-center mx-auto">
              <div class="headline">MC4324 Visual Storytelling</div>
              <span class="grey--text">Expand for video</span>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-spacer />
            <v-btn icon @click="showProject3 = !showProject3">
              <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
            </v-btn>
            <v-spacer />
          </v-card-actions>

          <v-slide-y-transition>
            <v-card-text v-show="showProject3">
              <div class="mx-auto">
                <iframe width="100%" height="315" src="https://www.youtube.com/embed/yHw1oCHI8Hw" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
              </div>
            </v-card-text>
          </v-slide-y-transition>
        </v-card>
      </v-flex>

      <!-- PROJECT (MC1313 Media Writing)-->
      <v-flex>
        <v-card :width="projectCardWidth" :max-width="projectCardMaxWidth" class="mx-auto my-5">
          <v-img
            :src="project4Image"
            height="200px"
          >
          </v-img>

          <v-card-title primary-title>
            <div class="text-xs-center mx-auto">
              <div class="headline">MC1313 Media Writing</div>
              <span class="grey--text">Expand for project links</span>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-spacer />
            <v-btn icon @click="showProject4 = !showProject4">
              <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
            </v-btn>
            <v-spacer />
          </v-card-actions>

          <v-slide-y-transition>
            <v-card-text v-show="showProject4">
              <div class="text-xs-center mx-auto">
                <ul class="text-xs-center">
                  <li>
                    <a href="../../static/animalcruelty.pdf" target="_blank">Animal Cruelty</a>
                  </li>
                  <li>
                    <a href="../../static/basicstory.pdf" target="_blank">Facts Story</a>
                  </li>
                </ul>
              </div>
            </v-card-text>
          </v-slide-y-transition>
        </v-card>
      </v-flex>

      <!-- PROJECT (MC 3390) Media Design-->
      <v-flex>
        <v-card :width="projectCardWidth" :max-width="projectCardMaxWidth" class="mx-auto my-5">
          <v-img
            :src="project5Image"
            height="250px"
          >
          </v-img>

          <v-card-title primary-title>
            <div class="text-xs-center mx-auto">
              <div class="headline">MC3390 Media Design</div>
              <span class="grey--text">Expand for project links</span>
            </div>
          </v-card-title>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn large icon @click="showProject5 = !showProject5">
              <v-icon large>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
            </v-btn>
            <v-spacer />
          </v-card-actions>

          <v-slide-y-transition>
            <v-card-text v-show="showProject5">
              <ul class="text-xs-center">
                <li>
                  <a href="../../static/MagazineProject.pdf" target="_blank">Magazine Project</a>
                </li>
              </ul>
            </v-card-text>
          </v-slide-y-transition>
        </v-card>
      </v-flex>

    </v-layout>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
import AnalyticsPhoto from '@/assets/analytics_stock.jpg'
import SocialMediaPhoto from '@/assets/social_media_stock.jpg'
import MagazineProjectPhoto from '@/assets/magazine_stock.jpg'
import MediaWritingPhoto from '@/assets/media_writing_stock.jpg'
import StorytellingPhoto from '@/assets/storytelling_stock.jpg'

export default {
  name: 'Portfolio',
  components: {

  },
  data () {
    return {
      show: false,
      showProject1: false,
      showProject2: false,
      showProject3: false,
      showProject4: false,
      showProject5: false,
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
    },
    project3Image () {
      return StorytellingPhoto
    },
    project4Image () {
      return MediaWritingPhoto
    },
    project5Image () {
      return MagazineProjectPhoto
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
  },
  .vanilla_centering {
    /* margin: auto; */
  }
</style>

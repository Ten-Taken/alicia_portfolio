<template>
  <div>
    <v-card :height="getViewportHeight" flat>
      <v-layout row>
        <v-flex xs10 offset-xs1 sm8 offset-sm2 class="mt-5">
          <div class="display-1 darkBlue--text text-xs-center"> {{ title }}</div>
          <br>
          <div class="text-xs-left" id="about_para_1_container">
            <div id="float_image">
              <v-img
                :src="aliciaImage"
                height="225px"
                contain
                class="shadow_my_box"
              />
            </div>
            <div>{{ paragraph1 }}</div>
          </div>
          <br>
          <div class="text-xs-left"> {{ paragraph2 }}</div>
          <br>
          <div class="text-xs-left"> {{ paragraph3 }}</div>
          <br>
          <div class="text-xs-left"> {{ paragraph4 }}</div>
        </v-flex>
      </v-layout>
    </v-card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AliciaImage from '@/assets/avatar.jpg'

export default {
  name: 'About',
  components: {

  },
  data () {
    return {
      title: 'About me',
      paragraph1: 'I grew up in Tomball, Texas which is slightly north of Houston, I moved to San Marcos so I could complete my education at Texas State University.  I will graduate in December 2018 with a Bachelor of Science in Digital Media Innovation and Mass Communication. I’m looking forward to starting my career specializing in digital media in the marketing or advertising fields.',
      paragraph2: 'My minor is in Art Design and I consider my artistic talent an asset when creating ad campaigns. I have studied art since high school and have truly enjoyed the freedom of expression it provides. I also enjoy photography where I have learned advanced skills over the years manipulating photographs with Adobe software to create designs with a message that draw audiences to the work. I also enjoy photography as a hobby, taking pictures of nature, animals and people and how they interact with one another. During my undergraduate studies, I have learned many different skills including social media advertising, web design, data research analytics, content creation, and application development to name a few. From the jobs I’ve had I’ve learned problem solving, time management, team leadership and organizational skills.  The skills I’ve learned at Texas State and through work experience, I believe have positioned me to be successful in my field where I will continue to build upon those talents.',
      paragraph3: 'During my senior year I have been active in various school events and professional clubs including the Advertising clubs, Austin-AAF and Ad2Austin, which helps me network with professionals and build relationships in my target industry. Some of our events include community service, social gatherings and touring advertising agencies in Austin.',
      paragraph4: 'In conclusion, I have gathered marketable skills from the Texas State Digital Media Innovation degree and several jobs worked which will allow me to find a position in the digital media marketing or advertising fields to start my career.'

    }
  },
  computed: {
    ...mapGetters([
      'getViewportHeight'
    ]),
    aliciaImage () {
      return AliciaImage
    }
  },
  methods: {

  }
}
</script>

<style scoped>
  #about_para_1_container {
    background: white;
  }
  #float_image {
    float: left;
    width: 125px;
    margin-right: 15px;
  }

  .shadow_my_box {
    box-shadow: 2px 2px 2px 2px #0c1960;
  }
</style>

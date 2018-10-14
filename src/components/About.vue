<template>
  <div>
    <v-card :height="getViewportHeight">
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
      paragraph1: 'Lorem ninja ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut ninja wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit ninja lobortis nisl ut aliquip ex ea commodo consequat. Duis ninja autem vel eum iriure dolor in hendrerit in vulputate ninja velit esse molestie consequat, vel illum dolore eu feugiat nulla ninja facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam ninja ipsum liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi ninja non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes ninja demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas ninja est etiam processus dynamicus, qui ninja sequitur mutationem consuetudium lectorum. Mirum ninja est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem ninja ipsum modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in ninja futurum.',
      paragraph2: 'atum zzril delenit augue duis dolore te feugait nulla facilisi. Nam ninja ipsum liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi ninja non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes ninja demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas ninja est etiam processus dynamicus, qui ninja sequitur mutationem consuetudium lectorum. Mirum ninja est notare quam littera gothica, q',
      paragraph3: 'atum zzril delenit augue duis dolore te feugait nulla facilisi. Nam ninja ipsum liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi ninja non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes ninja demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas ninja est etiam processus dynamicus, qui ninja sequitur mutationem consuetudium lectorum. Mirum ninja est notare quam littera gothica, q'

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

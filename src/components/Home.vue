<template>
  <div>
    <div class="absolute_container mt-0">
      <v-layout column>
        <v-flex>
          <v-avatar
            :tile="false"
            :size="avatarSize"
            color="grey lighten-4"
            class="mx-3 mb-1"
          >
            <img :src="aliciaAvatar" alt="avatar">
          </v-avatar>
        </v-flex>
        <v-flex>
          <div
            :class="{
              'headline': $vuetify.breakpoint.mdAndUp,
              'body-1': $vuetify.breakpoint.smAndDown
            }"
            class="customize_title white--text px-2">
            Alicia Singletary
          </div>
        </v-flex>
      </v-layout>
    </div>

    <hero-parallax />
  </div>
</template>

<script>
import HeroParallax from '@/components/HeroParallax'
import AliciaAvatar from '@/assets/avatar.jpg'

export default {
  name: 'Home',
  components: {
    HeroParallax,
    AliciaAvatar
  },
  data () {
    return {
      // avatarSize: '150'
    }
  },
  computed: {
    aliciaAvatar () {
      return AliciaAvatar
    },
    avatarSize () {
      if (this.$vuetify.breakpoint.smAndDown) {
        return '75'
      } else {
        return '150'
      }
    }
  },
  methods: {

  }
}
</script>

<style scoped>
  .absolute_container {
    position: absolute;
    z-index: 2;
    background-color: #0c1960;
  }

  .customize_title {
    white-space: nowrap;
    text-shadow: 3px 3px #000
  }
</style>

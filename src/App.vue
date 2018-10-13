<template>
  <v-app>
    <v-content>
      <div v-resize="updateClientHeight" ref="appRef" class="liquid_height">
        <site-nav />
        <router-view/>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'
import SiteNav from '@/components/SiteNav'

export default {
  data () {
    return {

    }
  },
  name: 'App',
  components: {
    SiteNav
  },
  mounted () {
    this.updateClientHeight()
  },
  computed: {

  },
  methods: {
    ...mapActions([
      'setViewportHeight'
    ]),
    updateClientHeight () {
      let height = this.$refs.appRef.clientHeight
      this.setViewportHeight(height)
    }
  }
}
</script>

<style>
  .liquid_height {
    height: 100vh;
  }
</style>

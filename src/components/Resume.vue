<template>
  <v-card :height="getViewportHeight" flat>
    <v-layout column>

      <v-flex>
        <v-card-actions>
          <v-spacer />
            <v-btn large outline class="mt-3" @click="downloadPDF('../../static/resume.pdf')">PDF Version</v-btn>
          <v-spacer />
        </v-card-actions>
      </v-flex>

      <v-flex>
        <v-card-text>
          <v-layout row wrap>
            <v-flex xs10 offset-xs1>
              <div class="mx-auto text-xs-left">
                <custom-resume />
              </div>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-flex>

    </v-layout>
  </v-card>
</template>

<script>
import { mapGetters } from 'vuex'
import CustomResume from '@/components/CustomResume'

export default {
  name: 'Resume',
  components: {
    CustomResume
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters([
      'getViewportHeight'
    ])
  },
  methods: {
    downloadPDF (file) {
      window.open(file, '_blank')
    }
  }
}
</script>

<style scoped>

</style>

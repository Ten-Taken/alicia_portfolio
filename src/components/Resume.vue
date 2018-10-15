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
                PDF Content
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

export default {
  name: 'Resume',
  components: {

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
  span.cls_002{font-family:Arial,serif;font-size:14.1px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}
  div.cls_002{font-family:Arial,serif;font-size:14.1px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}
  span.cls_003{font-family:Arial,serif;font-size:10.0px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}
  div.cls_003{font-family:Arial,serif;font-size:10.0px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}
  span.cls_026{font-family:Arial,serif;font-size:10.0px;color:rgb(76,108,121);font-weight:normal;font-style:normal;text-decoration: underline}
  div.cls_026{font-family:Arial,serif;font-size:10.0px;color:rgb(76,108,121);font-weight:normal;font-style:normal;text-decoration: none}
  span.cls_007{font-family:Arial,serif;font-size:12.1px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}
  div.cls_007{font-family:Arial,serif;font-size:12.1px;color:rgb(0,0,0);font-weight:bold;font-style:normal;text-decoration: none}
  span.cls_009{font-family:Arial,serif;font-size:11.1px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}
  div.cls_009{font-family:Arial,serif;font-size:11.1px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}
  span.cls_010{font-family:Arial,serif;font-size:11.1px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}
  div.cls_010{font-family:Arial,serif;font-size:11.1px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}
  span.cls_015{font-family:Arial,serif;font-size:10.0px;color:rgb(87,87,87);font-weight:bold;font-style:normal;text-decoration: none}
  div.cls_015{font-family:Arial,serif;font-size:10.0px;color:rgb(87,87,87);font-weight:bold;font-style:normal;text-decoration: none}
  span.cls_018{font-family:Arial,serif;font-size:10.0px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}
  div.cls_018{font-family:Arial,serif;font-size:10.0px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}
  span.cls_025{font-family:Arial,serif;font-size:9.1px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}
  div.cls_025{font-family:Arial,serif;font-size:9.1px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}
  span.cls_011{font-family:Arial,serif;font-size:9.1px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}
  div.cls_011{font-family:Arial,serif;font-size:9.1px;color:rgb(0,0,0);font-weight:normal;font-style:normal;text-decoration: none}
</style>

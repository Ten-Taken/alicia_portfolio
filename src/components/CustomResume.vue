<template>
  <div>
    <!-- INTRO -->
    <!-- <div class="title darkBlue--text"> {{ name }} </div>
    <v-layout row class="my-3">
      <v-flex></v-flex>
      <v-flex></v-flex>
    </v-layout> -->
    <!-- KEY SKILLS -->
    <div class="title darkBlue--text"> {{ sectionTitle1 }} </div>
    <v-layout row wrap class="my-3">
      <v-flex xs12 sm6>
        <ul>
          <li>Social media customer acquisition</li>
          <li>Photoshop</li>
          <li>Premiere Prop</li>
          <li>IMovie</li>
          <li>WordPress</li>
          <li>Hootsuite</li>
        </ul>
      </v-flex>
      <v-flex xs12 sm6>
        <ul>
          <li>Publisher 2016</li>
          <li>Illustrator</li>
          <li>InDesign</li>
          <li>Audition CC</li>
          <li>Customer Service</li>
          <li>Web design: Basic HTML, Javascript, CSS</li>
        </ul>
      </v-flex>
    </v-layout>
    <v-divider class="my-3"  />

    <!-- WORK HISTORY -->
    <div class="headline darkBlue--text"> {{ sectionTitle2 }} </div>
    <v-layout row wrap class="my-3">
      <v-flex xs12 class="mt-2">
        <v-layout row wrap>
          <v-flex xs12 sm6>
            <samp class="body-2 font-weight-bold">Jared Vault - San Marcos, TX</samp>
            <div v-if="$vuetify.breakpoint.xsOnly" class="my-1">
              <em class="caption">Sept 2016 - Nov 2016</em>
            </div>
            <ul>
              <li>Jared sales consultant</li>
              <li>Presented product promotions to customers</li>
              <li>Aided in inventory control</li>
            </ul>
          </v-flex>
          <v-flex v-if="$vuetify.breakpoint.smAndUp" xs12 sm6>
            <em>Sept 2016 - Nov 2016</em>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12 class="mt-2">
        <v-layout row wrap>
          <v-flex xs12 sm6>
            <samp class="body-2 font-weight-bold">MarketSource, Inc. - Houston, TX</samp>
            <div v-if="$vuetify.breakpoint.xsOnly" class="my-1">
              <em class="caption">Dec 2015 – Aug 2016</em>
            </div>
            <ul>
              <li>Target store mobile product sales representative</li>
              <li>Informed customers on promotions and products</li>
              <li>Developed problem-solving skills resolving customer issues</li>
              <li>Responded to customer service issues and recommended solutions</li>
              <li>Setup customer account and activated new lines or upgrades</li>
              <li>Stocked &amp; updated inventory in database</li>
              <li>Trained new employees </li>
            </ul>
          </v-flex>
          <v-flex v-if="$vuetify.breakpoint.smAndUp" xs12 sm6>
            <em>Dec 2015 – Aug 2016</em>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12 class="mt-2">
        <v-layout row wrap>
          <v-flex xs12 sm6>
            <samp class="body-2 font-weight-bold">Studio One to One - The Woodlands, TX</samp>
            <div v-if="$vuetify.breakpoint.xsOnly" class="my-1">
              <em class="caption">May 2013 – July 2013</em>
            </div>
            <ul>
              <li>Photographer</li>
              <li>Promoted packages to prospective customers</li>
              <li>Scheduled appointments </li>
              <li>Enhanced photos using Photoshop to customer’s satisfaction</li>
              <li>Prepared orders for lab processing</li>
            </ul>
          </v-flex>
          <v-flex v-if="$vuetify.breakpoint.smAndUp" xs12 sm6>
            <em>May 2013 – July 2013</em>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-divider class="my-3"  />


    <!-- EDUCATION -->
    <div class="headline darkBlue--text"> {{ sectionTitle3 }} </div>
    <v-layout row class="my-3">
      <v-flex></v-flex>
      <v-flex></v-flex>
    </v-layout>
    <v-divider class="my-3"  />
    <!-- ACCOMPLISHMENTS -->
    <div class="headline darkBlue--text"> {{ sectionTitle4 }} </div>
    <v-layout row class="my-3">
      <v-flex></v-flex>
      <v-flex></v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'CustomResume',
  components: {

  },
  data () {
    return {
      name: 'Alicia Singletary',
      sectionTitle1: 'Key Skills & Abilities',
      sectionTitle2: 'Work History',
      sectionTitle3: 'Education',
      sectionTitle4: 'Accomplishments'
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>

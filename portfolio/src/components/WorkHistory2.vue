<template>
  <div id="history">

      <v-container>
      <h1>Work history</h1>

      <v-row>

        <v-col cols="7">
          <div class="second-work-title">
            <h3>(2020 - 現在) 興生総合病院</h3>
          </div>
          <div class="second-work-text">
            <p>家庭の事情により一時広島に戻ることに</p>
            <p></p>
          </div>
        </v-col>

        <v-col cols="5">
        <div class="second-work-image">
          <v-img
            v-bind:src="kousei_src">
          </v-img>
        </div>
        </v-col>



      </v-row>

      </v-container>

      <back-button :back-url="backUrl" />
      <next-button :next-url="nextUrl" />

    </div>
</template>

<script>
import NextButton from '../components/NextButton.vue'
import BackButton from '../components/BackButton.vue'

export default {
  data() {
    return {
      kousei_src: require("@/assets/img/kousei.jpg"),
      nextUrl: '/about/belief',
      backUrl: '/about/history'
    }
  },
  components: {
    NextButton,
    BackButton
  }
}
</script>

<style scoped>

#history {
  height: 90vh;
  width: 100%;
  position: relative;
}
#history h1 {
  text-align: left;
  font-size: 3.5rem;
  color: #072142;
  letter-spacing: 0.12em;
  font-family: "futura_m";
  margin-right: 3.2rem;
  padding-top: 1rem;
  margin-bottom: 8vh;
}

.second-work-title {
  text-align: left;
  font-size: 1.3rem;
  letter-spacing: 0.15em;
  font-weight: bold;
  margin-bottom: 1.3rem;
}
.second-work-title h3 {
  font-size: 2rem;
  letter-spacing: 0.2em;
  font-weight: bold;
  margin-bottom: 0.4rem;
  text-align: left;
}
.second-work-text {
  text-align: left;
  letter-spacing: 0.08rem;
  line-height: 1.9;
}
.second-work-image {
  box-shadow: 0 0 15px rgba(0,0,0,.3);
}
</style>

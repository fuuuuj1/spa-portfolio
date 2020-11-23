<template>
  <div id="history">

      <v-container>
      <h1>Work history</h1>

        <v-row>

            <v-col cols="7">
              <div class="first-work-title">
                <h3>(2014 - 2019) 宇治徳洲会病院</h3>
              </div>

              <div class="first-work-text">
                <p>救急の現場で活躍できる人材になりたい思いがあり入職</p>
                <p>日々の業務に邁進するだけでなく、チームのために行動してきた結果、主任レベルの方々が参加するマネジメント研修会のメンバーとなり、チーム運営の技術、モチベーション向上などの方法を学習、実践する</p>
                <p>災害対応の研修や防災訓練などに主体的に参加することで、1000名以上いる職員の中からDMATメンバーに選出される</p>
              </div>
            </v-col>

          <v-col cols="5">
            <div class="first-work-image">
              <v-img
                v-bind:src="ujitoku_src">
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
      ujitoku_src: require("@/assets/img/ujitoku.jpg"),
      nextUrl: '/about/history2',
      backUrl: '/about'
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
.first-work-title {
  text-align: left;
  font-size: 1.3rem;
  letter-spacing: 0.15em;
  font-weight: bold;
  margin-bottom: 1.3rem;
}
.first-work-title h3 {
  font-size: 2rem;
  letter-spacing: 0.2em;
  font-weight: bold;
  margin-bottom: 0.4rem;
  text-align: left;
}
.first-work-text {
  text-align: left;
  letter-spacing: 0.08rem;
  line-height: 1.9;
}
.first-work-image {
  box-shadow: 0 0 15px rgba(0,0,0,.3);
}
</style>

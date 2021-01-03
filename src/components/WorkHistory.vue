<template>
  <div id="history">

      <v-container>
      <h1>Work history</h1>

        <v-row>

            <v-col cols="12" md="7">
              <div class="first-work-title">
                <h3>(2014 - 2019) 宇治徳洲会病院</h3>
                <h5>24時間体制で救命救急を提供する基幹病院</h5>
              </div>

              <div class="first-work-text">
                <p>救急の現場で活躍できる人材になりたい思いがあり入職</p>
                <p>日々の業務に邁進するだけでなく、チームのために行動してきた結果、主任レベルの方々が参加するマネジメント研修会のメンバーとなり、チーム運営の技術、モチベーション向上などの方法を学習、実践する</p>
                <p>災害対応の研修や防災訓練などに主体的に参加することで、1000名以上いる職員の中からDMATメンバーに選出される</p>
              </div>
            </v-col>

          <v-col cols="12" md="5">
            <div class="first-work-image">
              <v-img
                v-bind:src="ujitoku_src">
              </v-img>
            </div>
          </v-col>

        </v-row>

        <v-row>
          <v-col>
            <div class="work-about">
              <span>診療放射線技師とは・・・放射線を扱い医療画像を撮影する医療現場の放射線の専門家 レントゲン,CT,MRI,Angioなど多数のモダリティを扱う
              </span>
              <span>DMATとは・・・災害急性期に活動できる機動性を持ったトレーニングを受けた医療チーム Ｄisaster Ｍedical Ａssistance Ｔeamの略語</span>
            </div>
          </v-col>
        </v-row>

      </v-container>

      <div class="btn_content">
        <back-button :back-url="backUrl" class="workhistory_btn"/>
        <next-button :next-url="nextUrl" class="workhistory_btn workhistory_btn_next"/>
      </div>
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
  font-family: 'futura_r','Helvetica Neue','Helvetica','Arial','Avenir','Hiragino Sans',游ゴシック体, 'Yu Gothic', YuGothic,'ヒラギノ角ゴシック','メイリオ', Meiryo,'ＭＳ Ｐゴシック','MS PGothic', sans-serif;
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
.work-about {
  justify-content: center;
  vertical-align: middle;
  display: flex;
  height: 100%;
  flex-direction: column;
  line-height: 2;
  color: #828C96;
}
.btn_content{
  position: relative;
  height: 8vh;
}
.btn_content a {
  position:absolute;
}
/* -------------------------- */
@media screen and (max-width:720px){
  #history {
    height: 100vh;
  }
  #history h1 {
  font-size: 1.8rem;
  margin-bottom: 1vh;
}
.first-work-title {
  font-size: 1.2rem;
}
.first-work-title h3 {
  font-size: 1.3rem;
}
.first-work-text {
  text-align: left;
  letter-spacing: 0.07rem;
  line-height: 1.6;
  font-size: 0.9rem;
}
.work-about {
  font-size: 0.9rem;
}
}
</style>

<template>
  <div id="history">

      <v-container>
      <h1>Work history2</h1>

      <v-row>

        <v-col cols="12" md="7">
          <div class="second-work-title">
            <h3>(2020 - 現在) 興生総合病院</h3>
            <h5>三原市で随一の救急と整形外科に特化した病院</h5>
          </div>
          <div class="second-work-text">
            <p>家庭の事情により一時広島に戻ることに</p>
            <p>入職して3ヶ月で夜勤と、未経験であった胃透視業務を担当<br>
            技術のキャッチアップの速さからCTメイン担当に選任される。組織運営の助力のためにメンバーのスキルマップ作成を担当するなど、マネジメント業務にも力を入れつつ日々の業務をこなしています</p>
            <p></p>
          </div>
        </v-col>

        <v-col cols="12" md="5">
        <div class="second-work-image">
          <v-img
            v-bind:src="kousei_src">
          </v-img>
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
      kousei_src: require("@/assets/img/kousei_d.jpg"),
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
  .second-work-title {
    font-size: 1.2rem;
  }
  .second-work-title h3 {
    font-size: 1.3rem;
  }
  .second-work-text {
    letter-spacing: 0.07rem;
    line-height: 1.6;
    font-size: 0.9rem;
  }
}
</style>

<template>
  <div class="home">

    <div class="top-visual">
      <v-img
      v-bind:src="home_img"
      max-height="550"></v-img>
    </div>

    <div class="declaration">
      <h1>
        <span>エンジニアを</span>
        <span class="gray">目指し転職活動中</span>
        <span class="hope">関西でバックエンド志望</span>
      </h1>
    </div>

    <div class="sub-text">
      <p>私について詳しくはこちらから</p>
    </div>

    <div class="hide_mobile">
    <next-button :next-url="nextUrl" />
    </div>

    <div class="btn_content hide_pc">
      <next-button :next-url="nextUrl" class="workhistory_btn workhistory_btn_next"/>
    </div>

  </div>
</template>

<script>
import NextButton from '../components/NextButton.vue'

export default {
  data() {
    return {
      home_img: require("@/assets/img/home-bridge.jpg"),
      nextUrl: '/about'
    }
  },
  components: {
    NextButton
  },
}
</script>

<style scoped>
/* ---------------------------------------------------- */
  .home {
  position: relative;
  height: 90vh;
}
.home .top-visual {
  width: 70%;
  height: 70vh;
  position: absolute;
    top: 10%;
    left: 0;
}
  .declaration {
  position: absolute;
  right: 7%;
  top: 90px;
  text-align: right;
  font-family: "Noto Sans Japanese", "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", Meiryo, メイリオ, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
  color: black;
}
.declaration h1 {
  font-size: 74px;
    font-family: "Verlag A","Verlag B";
    font-weight: 800;
    line-height: 1;
    letter-spacing: 3px;
}
.declaration h1 span{
  display: block;
    padding: 0 0 4px 0;
    margin: 38px 0 0 0;
    font-size: 74px;
    letter-spacing: 0.06em;
}
.declaration h1 .hope {
  background: rgba(224, 224, 224, 0.6);
}
.sub-text {
  position: absolute;
  right: 7%;
  bottom: 12%;
}
.btn_content{
  /* position: relative; */
  height: 8vh;
}
.btn_content a {
  position:absolute;
}
.hide_pc {
  display:none
}
/* ---------------------------------------------------- */
/* モバイル対応 */
@media screen and (max-width:720px) {
.home {
  position: relative;
  height: 80vh;
}
.home .top-visual {
  width: 70%;
  height: 70vh;
  position: absolute;
    top: 10%;
    left: 15%;
}

.declaration {
  position: absolute;
  left: 13%;
  top: 38vh;
  text-align: left;
  font-family: "Noto Sans Japanese", "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", Meiryo, メイリオ, "ＭＳ Ｐゴシック", "MS PGothic", sans-serif;
  color: black;
}
.declaration h1 {
  font-size: 24px;
    font-family: "Verlag A","Verlag B";
    font-weight: 800;
    line-height: 0.5;
    letter-spacing: 1px;
}
.declaration h1 span{
  display: block;
    padding: 0 0 4px 0;
    margin: 28px 0 0 0;
    font-size: 24px;
    letter-spacing: 0.06em;
}
.declaration h1 .hope {
  background: white !important;
}
.sub-text {
  position: absolute;
  right: 7%;
  bottom: 12%;
}
.hide_mobile {
    display:none
  }
  .hide_pc {
    display:block;
    position: absolute;
    right: 5%;
    bottom: -1%;
  }
}



/* ---------------------------------------------------- */
/* ---------------------------------------------------- */
/* ---------------------------------------------------- */
/* ---------------------------------------------------- */
</style>

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

    <next-button :next-url="nextUrl" />

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

<style>
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
  top: 140px;
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
</style>

<template>
<div id="works">
  <v-container class="works-container">
    <h1>Radiation Docimeter</h1>

    <v-row class="works-row">
      <v-col cols="5" class="works-image">
        <div class="works-view1">
          <v-carousel
            :show-arrows="false"
            :hide-delimiter-background="true"
            :height="350"
            :class="`rounded-b-xl`"
            class="work1-carousel"
            >
              <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                :src="item.src">
              </v-carousel-item>
          </v-carousel>
        </div>
      </v-col>

      <v-col cols="7">

        <div class="works-subtitle">
          <h2>医療従事者の業務上における被ばくを管理するサイト</h2>
          <h3>自身の被ばく線量を把握していない方が多い。被ばく線量を直感的に把握するために作成</h3>
        </div>

        <hr class="works-hr">

        <div class="works-text">
          <p class="app-taget"><span class="strong">ターゲット : </span>放射線を扱う業務に携わる医療従事者</p>
          <p class="app-feature"><span class="strong">出来る事 : </span>自身の被ばく線量を把握しながら、年間の被ばく線量限度を確認</p>
          <p class="app-tech"><span class="strong">使用技術 : </span>アイコンの列挙</p>
          <p class="github-code"><span class="strong">GitHub : </span>リンクの記述</p>
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
    data () {
      return {
        items: [
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
          },
          {
            src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
          },
        ],
        nextUrl: '/contact',
        backUrl: '/about'
      }
    },
    components: {
      NextButton,
      BackButton
    },
}
</script>

<style>
#works {
  position: relative;
  height: 90vh;
  width: 100%;
  font-family: 'futura_r','Helvetica Neue','Helvetica','Arial','Avenir','Hiragino Sans',游ゴシック体, 'Yu Gothic', YuGothic,'ヒラギノ角ゴシック','メイリオ', Meiryo,'ＭＳ Ｐゴシック','MS PGothic', sans-serif;
    -webkit-text-size-adjust: 100%;
    -moz-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
    text-size-adjust: 100%;
    color: #828c96;
    overflow-x: hidden;
}
#works h1 {
  text-align: left;
  font-size: 3.5rem;
  color: #072142;
  letter-spacing: 0.12em;
  font-family: "futura_m";
  margin-right: 3.2rem;
  padding-top: 1rem;
  margin-bottom: 7vh;
}
.works-container {
  height: 80vh;
}
.works-row {
  height: auto;
}
.works-image {
  justify-content: center;
  vertical-align: middle;
}
.works-subtitle {
  margin-bottom: 1rem;
}
.works-subtitle h2 {
  text-align: left;
  margin-bottom: 1rem;
}
.works-subtitle h3 {
  text-align: left;
  margin-bottom: 1rem;
  white-space: nowrap;
}
.works-hr {
  margin-bottom:1.5rem ;
}
.works-text {
  text-align: left;
}
.works-text p {
  margin-bottom: 0.6rem;
  line-height: 2;
  font-size: 1.2rem;
  white-space: nowrap;
}
.works-text p span {
  font-size: 1.4rem;
}
</style>

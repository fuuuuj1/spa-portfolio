<template>
<div id="works">
  <v-container class="works-container">
    <h1>my-portfolio</h1>

    <v-row class="works-row">
      <v-col cols="5" class="works-image">
        <div class="works-view1">
          <v-carousel
            :show-arrows="false"
            :height="350"
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
          <h2>Vue.jsを用いたポートフォリオサイト</h2>
          <h3>スクロール不要。クリックのみで全てのページを閲覧できるようにSPA仕様</h3>
        </div>

        <hr class="works-hr">

        <div class="works-text">
          <p class="app-taget"><span class="strong">ターゲット : </span>新戦力を探していらっしゃる企業の方々</p>
          <p class="app-feature"><span class="strong">出来る事 : </span>好奇心旺盛な私の、簡単な自己紹介をするためのサイト</p>
          <p class="app-tech"><span class="strong">使用技術 : </span>

            <span class="tech-icon">

              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon color="vue"
                  v-on="on"
                  v-bind="attrs"
                  >mdi-vuejs</v-icon>
                </template>
                <span>Vue 2.6, Vue Cli, Vue Router</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon color="vuetify"
                  v-on="on"
                  v-bind="attrs"
                  >mdi-vuetify</v-icon>
                </template>
                <span>Vuetify 2.3</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon color="docker"
                  v-on="on"
                  v-bind="attrs">mdi-docker</v-icon>
                </template>
                <span>Docker,Docker-compose</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
              <v-icon color="git"
              v-on="on"
                  v-bind="attrs">mdi-git</v-icon>
                </template>
                <span>Git</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon color="github"
                  v-on="on"
                  v-bind="attrs">mdi-github</v-icon>
                </template>
                <span>GitHub</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon color="github"
                  v-on="on"
                  v-bind="attrs">mdi-alpha-n-box-outline</v-icon>
                </template>
                <span>Notion</span>
              </v-tooltip>

            </span>
          </p>

          <p class="github-code"><span class="strong">GitHub : </span><a href="https://github.com/fuuuuj1/spa-portfolio" target="blank">https://github.com/fuuuuj1/spa-portfolio</a></p>
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
        backUrl: '/works/2'
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
  color: #828c96;
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
  color: #828c96;
}
.works-text .tech-icon i {
  margin-left: 1rem;
}
</style>

<template>
<div id="works">
  <v-container>
    <h1>Radiation Dosimeter</h1>

    <v-row class="works-row">
      <v-col cols="12" md="5" class="works-image">
        <div class="works-view1">
          <v-carousel
            cycle
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

      <v-col cols="12" md="7">

        <div class="works-subtitle">
          <h2>医療従事者の業務上における被ばくを管理するサイト</h2>
          <h3>自身の被ばく線量を把握していない方が多い。被ばく線量を直感的に把握するために作成</h3>
        </div>

        <hr class="works-hr">

        <div class="works-text">
          <p class="app-taget"><span class="strong">ターゲット : </span>放射線を扱う業務に携わる医療従事者</p>
          <p class="app-feature"><span class="strong">出来る事 : </span>グラフで年間の被ばく線量と被ばく線量限度を確認できる</p>
          <p class="app-tech"><span class="strong">使用技術 : </span>

            <span class="tech-icon">

              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon
                    color="laravel"
                    v-on="on"
                    v-bind="attrs"
                  >mdi-laravel</v-icon>
                </template>
                <span>Laravel 5.8</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon color="mdbootstrap"
                  v-on="on"
                  v-bind="attrs"
                  >mdi-bootstrap</v-icon>
                </template>
                <span>MDBootstrap</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon color="jquery"
                  v-on="on"
                  v-bind="attrs"
                  >mdi-jquery</v-icon>
                </template>
                <span>jQuery</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon color="vue"
                  v-on="on"
                  v-bind="attrs"
                  >mdi-vuejs</v-icon>
                </template>
                <span>Vue 2.6</span>
              </v-tooltip>

              <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                  <v-icon color="mysql"
                  v-on="on"
                  v-bind="attrs">mdi-database</v-icon>
                </template>
                <span>MySQL 5.7</span>
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
                  v-bind="attrs">mdi-alpha-c-circle</v-icon>
                </template>
                <span>CircleCI</span>
              </v-tooltip>

            </span>
          </p>

          <p class="github-code"><span class="strong">GitHub : </span><a href="https://github.com/fuuuuj1/RD_app" target="blank">https://github.com/fuuuuj1/RD_app</a></p>
          <p class="github-code"><span class="strong">URL : </span><a href="https://www.radiationdosimeter.tech/">https://www.radiationdosimeter.tech</a></p>
        </div>

      </v-col>
    </v-row>
  </v-container>

  <div class="hide_mobile">
    <back-button :back-url="backUrl" />
    <next-button :next-url="nextUrl" />
  </div>

  <div class="btn_content hide_pc">
    <back-button :back-url="backUrl" class="workhistory_btn"/>
    <next-button :next-url="nextUrl" class="workhistory_btn workhistory_btn_next"/>
  </div>

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
            src: require("@/assets/img/demo1.jpg"),
          },
          {
            src: require("@/assets/img/demo2.jpg"),
          },
          {
            src: require("@/assets/img/demo3.jpg"),
          },
          {
            src: require("@/assets/img/demo4.jpg"),
          },
        ],
        nextUrl: '/works/2',
        backUrl: '/about/belief'
      }
    },
    components: {
      NextButton,
      BackButton
    },
}
</script>

<style scoped>
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
.work1-carousel .v-image__image--cover{
  background-size: contain;
}
.btn_content{
  position: relative;
  height: 8vh;
}
.btn_content a {
  position:absolute;
}
.hide_pc {
  display:none
}
@media screen and (max-width:720px){
  #works {
    height: 100vh;
  }
  #works h1 {
    font-size: 1.8rem;
    margin-bottom: 1vh;
  }
  .works-subtitle h2 {
    font-size: 1.3rem;
  }
  .works-subtitle h3 {
    white-space: normal;
    font-size: 1.1rem;
  }
  .works-text p{
    white-space: normal;
  }
  .works-text p span {
  font-size: 1.1rem;
  }
  .works-text p {
  margin-bottom: 0.4rem;
  font-size: 0.9rem;
  white-space: normal;
  }
  .works-text .tech-icon i {
  margin-left: 0.5rem;
  }
  .hide_mobile {
    display:none
  }
  .hide_pc {
    display:block
  }
}
</style>

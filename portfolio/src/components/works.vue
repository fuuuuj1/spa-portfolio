<template>
<div id="works">
  <v-container>
    <h1>ポートフォリオ名</h1>
    <v-row>
      <v-col cols="5">
        <div class="works-view1">
          <v-carousel
            :show-arrows="false"
            :hide-delimiter-background="true"
            :height="300"
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
          <h3>このアプリを一言で表現すると？</h3>
          <h4>この問題を解決するために作成</h4>
        </div>

        <div class="works-text">
          <p class="app-taget"><span class="strong">ターゲット:</span>想定する使用者</p>
          <p class="app-feature"><span class="strong">機能:</span>このアプリで何がわかるの？どうやって使うの？</p>
          <p class="app-tech"><span class="strong">使用技術:</span>アイコンの列挙</p>
          <p class="github-code"><span class="strong">Git-hub:</span>リンクの記述</p>
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
}
#works h1 {
  text-align: left;
  font-size: 3.5rem;
  color: #072142;
  letter-spacing: 0.12em;
  font-family: "futura_m";
  margin-right: 3.2rem;
  padding-top: 1rem;
  margin-bottom: 5vh;
}

</style>

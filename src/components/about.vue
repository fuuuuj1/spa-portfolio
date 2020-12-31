<template>
  <div class="about-me">

    <div id="profile">


      <v-container>
      <h1 class="heading">Profile</h1>

      <v-row>

      <v-col cols="12" md="6">
      <div class="profile-title">
        <h3>藤木 章吾</h3>
        <p>エンジニアを目指す診療放射線技師</p>
      </div>
      <div class="profile-text">
        <p>1993年3月、広島県生まれ。大学を卒業後、京都府宇治市における救急の中核病院に診療放射線技師として就職。
          2020年1月より地元の病院に転職。患者さんや他の医療従事者のために働いていくことも好きであるが、より多くの人のためにサービスを提供できるWEBエンジニアになりたいと思い、2020年4月より独学でプログラミング学習開始。
        </p>
      </div>
      </v-col>

      <v-col cols=12 md="6">
      <div class="profile-photo">
        <v-img
          v-bind:src="profile_src">
        </v-img>
      </div>
      </v-col>

      </v-row>
      </v-container>

      <back-button :back-url="backUrl" />
      <next-button :next-url="nextUrl" />

    </div>


      <!-- ランダムに画像を配置するfanctionの実装 画像は6枚ほど？ toolchipの設定 -->
    <!-- <image-view/> -->

  </div>
</template>

<script>
import NextButton from '../components/NextButton.vue'
import BackButton from '../components/BackButton.vue'

export default {
  data() {
    return {
      profile_src: require("@/assets/img/IMG_0711.jpeg"),
      nextUrl: '/about/history',
      backUrl: '/'
    }
  },
  components: {
    NextButton,
    BackButton
  }
}
</script>

<style scope>
#profile {
  height: 90vh;
  width: 100%;
  position: relative;
  font-family: 'futura_r','Helvetica Neue','Helvetica','Arial','Avenir','Hiragino Sans',游ゴシック体, 'Yu Gothic', YuGothic,'ヒラギノ角ゴシック','メイリオ', Meiryo,'ＭＳ Ｐゴシック','MS PGothic', sans-serif;
}
#profile h1 {
  text-align: left;
  font-size: 3.5rem;
  color: #072142;
  letter-spacing: 0.2em;
  font-family: "futura_m";
  margin-right: 3.2rem;
  padding-top: 1.2rem;
  margin-bottom: 5vh;
}
.profile-title {
    color: #072142;
  margin-bottom: 2.4rem;
}
.profile-title  h3 {
  font-size: 2.4rem;
  letter-spacing: 0.3em;
  font-weight: bold;
  margin-bottom: 0.4rem;
  text-align: left;
}
.profile-title p {
  font-size: 1.4rem;
    letter-spacing: 0.2em;
    line-height: 1.3;
    text-align: left;
}
.profile-text {
  text-align: left;
  line-height: 2;
}
.profile-photo {
  box-shadow: 0px 63px 124px -20px rgba(7, 33, 66, 0.5);
}
/* ---------------------------- */
@media screen and (max-width:720px){
  #profile h1 {
  text-align: left;
  font-size: 1.8rem;
  color: #072142;
  letter-spacing: 0.2em;
  font-family: "futura_m";
  margin-right: 3.2rem;
  padding-top: 0.6rem;
  margin-bottom: 1vh;
}
.profile-title {
    color: #072142;
  margin-bottom: 1.2rem;
}
.profile-title  h3 {
  font-size: 1.6rem;
  letter-spacing: 0.3em;
  font-weight: bold;
  margin-bottom: 0.4rem;
  text-align: left;
}
.profile-title p {
  font-size: 1.2rem;
    letter-spacing: 0.2em;
    line-height: 1.1;
    text-align: left;
}
.profile-text {
  text-align: left;
  line-height: 1.6;
  font-size: 0.9rem;
}
.profile-photo {
  box-shadow: 0px 63px 124px -20px rgba(7, 33, 66, 0.5);
}
}
</style>

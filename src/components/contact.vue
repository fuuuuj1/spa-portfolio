<template>
<div id="contact">

  <v-container>

    <v-row>

      <div class="contact-view">

        <div class="contact-title">
        <h1 class="header">Contact</h1>
        </div>

        <div class="contact-bg">
          <v-img
          v-bind:src="contact_img"
          max-height="400"></v-img>
        </div>

      </div>

    </v-row>

    <v-row class="contact-link">
        <v-col cols="4">
          <div class="icon-position">
            <v-btn
            icon
            href="https://twitter.com/fuuuucham1103">
              <v-icon
              size="80"
              color="twitter"
              >mdi-twitter</v-icon>
            </v-btn>
          </div>
        </v-col>

        <v-col cols="8">
          <div class="contact-text">
            <span>私に興味を持っていただけましたらDMからの連絡お待ちしております</span>
            <span><a href="https://www.wantedly.com/users/138685639" class="wantedly">Wantedly</a>もよろしければ見ていってください</span>
          </div>
        </v-col>
    </v-row>

  </v-container>
  <back-button :back-url="backUrl" />
</div>
</template>

<script>
import BackButton from '../components/BackButton.vue'

export default {
  data() {
    return {
      contact_img: require("@/assets/img/dambo.jpg"),
      backUrl: '/works/3'
    }
  },
  components: {
    BackButton
  },
}
</script>

<style scoped>
#contact {
  width: 100%;
  height: 90vh;
  position: relative;
  font-family: 'futura_r','Helvetica Neue','Helvetica','Arial','Avenir','Hiragino Sans',游ゴシック体, 'Yu Gothic', YuGothic,'ヒラギノ角ゴシック','メイリオ', Meiryo,'ＭＳ Ｐゴシック','MS PGothic', sans-serif;
}
#contact h1 {
  text-align: left;
  font-size: 3.5rem;
  color: #ffffff;
  letter-spacing: 0.12em;
  font-family: "futura_m";
  margin-right: 3.2rem;
  margin-bottom: 5vh;
  text-shadow:
    2px  2px 4px #072142,
    -2px  2px 4px #072142,
    2px  -2px 4px #072142,
    -2px  2px 4px #072142,
    2px  0px 4px #072142,
    0px  2px 4px #072142,
    -2px  0px 4px #072142,
    0px  -2px 4px #072142;
  position: relative;
  z-index: 2;
}
.contact-view {
  position: relative;
    width: 100%;
    height: 400px;
    margin: 0 auto;
  margin-bottom: 50px;
}
.contact-bg {
  position: absolute;
    top: 15%;
    right: 0%;
  width: 65%;
  z-index: 1;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 56px, rgba(17, 17, 26, 0.1) 0px 24px 80px;
}
.contact-title {
  position: absolute;
    left: 14%;
    top: 190px;
}
.container {
  margin-top: 1%;
}
.contact-link {
  margin-top: 8vh;
  text-align: center;
}
.contact-text {
  justify-content: center;
  vertical-align: middle;
  display: flex;
  height: 100%;
  flex-direction: column;
  line-height: 2;
  color: #828C96;
}
.contact-text span {
  text-align: left;
  color: #828C96;
  letter-spacing: 0.08rem;
}
.wantedly {
  font-size: 1.4rem;
  text-decoration: none;
  color: skyblue;
}
@media screen and (max-width:720px){
  #contact {
    height:90vh;
  }
  #contact h1 {
    font-size: 2.3rem;
    margin-bottom:1vh;
  }
  .contact-view {
    height: 250px;
    margin-bottom: 7vh;
  }
  .contact-title {
    position:absolute;
    left: 8%;
    top: 80px;
  }
  .contact-bg {
    position: relative;
    width: auto;
  }
  .contact-text {
    margin-top: 2vh;
  }
  .contact-text span {
    font-size: 0.9rem;
  }
  .contact-link {
    line-height: 140px;
  }
  .icon-position a {
    vertical-align: middle;
  }
}
</style>

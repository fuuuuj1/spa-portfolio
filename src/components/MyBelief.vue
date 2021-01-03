<template>
<div id="belief">
  <v-container>
  <h1 class="heading">Belief</h1>

  <v-row>
    <v-col class="belief-col" cols="12" md="4">
      <div class="belief-img">
        <!-- <img src="../assets/icons/charity.svg" alt="握手" class="useful"> -->
        <!-- <v-icon size="125px">mdi-charity</v-icon> -->
        <svg  viewBox="0 0 24 24" id="charity">
          <path fill="gradient1" d="M12.75,3.94C13.75,3.22 14.91,2.86 16.22,2.86C16.94,2.86 17.73,3.05 18.59,3.45C19.45,3.84 20.13,4.3 20.63,4.83C21.66,6.11 22.09,7.6 21.94,9.3C21.78,11 21.22,12.33 20.25,13.27L12.66,20.86C12.47,21.05 12.23,21.14 11.95,21.14C11.67,21.14 11.44,21.05 11.25,20.86C11.06,20.67 10.97,20.44 10.97,20.16C10.97,19.88 11.06,19.64 11.25,19.45L15.84,14.86C16.09,14.64 16.09,14.41 15.84,14.16C15.59,13.91 15.36,13.91 15.14,14.16L10.55,18.75C10.36,18.94 10.13,19.03 9.84,19.03C9.56,19.03 9.33,18.94 9.14,18.75C8.95,18.56 8.86,18.33 8.86,18.05C8.86,17.77 8.95,17.53 9.14,17.34L13.73,12.75C14,12.5 14,12.25 13.73,12C13.5,11.75 13.28,11.75 13.03,12L8.44,16.64C8.25,16.83 8,16.92 7.73,16.92C7.45,16.92 7.21,16.83 7,16.64C6.8,16.45 6.7,16.22 6.7,15.94C6.7,15.66 6.81,15.41 7.03,15.19L11.63,10.59C11.88,10.34 11.88,10.11 11.63,9.89C11.38,9.67 11.14,9.67 10.92,9.89L6.28,14.5C6.06,14.7 5.83,14.81 5.58,14.81C5.3,14.81 5.06,14.71 4.88,14.5C4.69,14.3 4.59,14.06 4.59,13.78C4.59,13.5 4.69,13.27 4.88,13.08C7.94,10 9.83,8.14 10.55,7.45L14.11,10.97C14.5,11.34 14.95,11.53 15.5,11.53C16.2,11.53 16.75,11.25 17.16,10.69C17.44,10.28 17.54,9.83 17.46,9.33C17.38,8.83 17.17,8.41 16.83,8.06L12.75,3.94M14.81,10.27L10.55,6L3.47,13.08C2.63,12.23 2.15,10.93 2.04,9.16C1.93,7.4 2.41,5.87 3.47,4.59C4.66,3.41 6.08,2.81 7.73,2.81C9.39,2.81 10.8,3.41 11.95,4.59L16.22,8.86C16.41,9.05 16.5,9.28 16.5,9.56C16.5,9.84 16.41,10.08 16.22,10.27C16.03,10.45 15.8,10.55 15.5,10.55C15.23,10.55 15,10.45 14.81,10.27V10.27Z" />
          <defs>
            <linearGradient id="gradient1">
              <stop class="stop1" offset="0%"/>
              <stop class="stop2" offset="50%"/>
              <stop class="stop3" offset="100%"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div class="belief-title">
        <h3>共創</h3>
      </div>


        <p class="belief-text">ライバルと競い合いお互いを高めていく。<br>
          ではなく、互いの強み、立場の違いを認めて協力をしながら、周囲の人や社会に貢献していく。<br>
          そのようにして、仕事をともにするメンバーだけでなくクライアントや、これから出会って関わっていく人々と、良好な関係を築きながら社会活動に励んでいきたいと考えています。
        </p>

    </v-col>

    <v-col class="belief-col" cols="12" md="4">
      <div class="belief-img">
        <!-- <img src="../assets/icons/book-open-variant.svg" alt="本のアイコン" class="learn"> -->
        <!-- <v-icon size="125px">mdi-book-open-variant</v-icon> -->
        <svg viewBox="0 0 24 24" id="book-open">
          <path fill="gradient2" d="M17.5 14.33C18.29 14.33 19.13 14.41 20 14.57V16.07C19.38 15.91 18.54 15.83 17.5 15.83C15.6 15.83 14.11 16.16 13 16.82V15.13C14.17 14.6 15.67 14.33 17.5 14.33M13 12.46C14.29 11.93 15.79 11.67 17.5 11.67C18.29 11.67 19.13 11.74 20 11.9V13.4C19.38 13.24 18.54 13.16 17.5 13.16C15.6 13.16 14.11 13.5 13 14.15M17.5 10.5C15.6 10.5 14.11 10.82 13 11.5V9.84C14.23 9.28 15.73 9 17.5 9C18.29 9 19.13 9.08 20 9.23V10.78C19.26 10.59 18.41 10.5 17.5 10.5M21 18.5V7C19.96 6.67 18.79 6.5 17.5 6.5C15.45 6.5 13.62 7 12 8V19.5C13.62 18.5 15.45 18 17.5 18C18.69 18 19.86 18.16 21 18.5M17.5 4.5C19.85 4.5 21.69 5 23 6V20.56C23 20.68 22.95 20.8 22.84 20.91C22.73 21 22.61 21.08 22.5 21.08C22.39 21.08 22.31 21.06 22.25 21.03C20.97 20.34 19.38 20 17.5 20C15.45 20 13.62 20.5 12 21.5C10.66 20.5 8.83 20 6.5 20C4.84 20 3.25 20.36 1.75 21.07C1.72 21.08 1.68 21.08 1.63 21.1C1.59 21.11 1.55 21.12 1.5 21.12C1.39 21.12 1.27 21.08 1.16 21C1.05 20.89 1 20.78 1 20.65V6C2.34 5 4.18 4.5 6.5 4.5C8.83 4.5 10.66 5 12 6C13.34 5 15.17 4.5 17.5 4.5Z" />
          <defs>
            <linearGradient id="gradient2">
              <stop class="stop1" offset="0%"/>
              <stop class="stop2" offset="50%"/>
              <stop class="stop3" offset="100%"/>
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div class="belief-title">
        <h3>探求心</h3>
      </div>

      <p class="belief-text">新しい物事に対して積極的に関わっていくこと、学んでいくことが大好きです。<br>
        仕事終わりの余暇にはプログラミングの学習。隙間時間には読書が最近のライフスタイルです。<br>
        読書やfeedlyで得た新しい知識を、Notionにストックしていくのが最近のトレンドです。<br>


        </p>

    </v-col>

    <v-col class="belief-col" cols="12" md="4">
      <div class="belief-img">
        <!-- <img src="../assets/icons/account-group.svg" alt="グループのアイコン" class="cooperate"> -->
        <!-- <v-icon size="125px">mdi-account-group</v-icon> -->
        <svg viewBox="0 0 24 24" id="summit">
          <path fill="gradient3" d="M15,3H17L22,5L17,7V10.17L22,21H2L8,13L11.5,17.7L15,10.17V3Z" />
          <defs>
            <linearGradient id="gradient3">
              <stop class="stop1" offset="0%"/>
              <stop class="stop2" offset="50%"/>
              <stop class="stop3" offset="100%"/>
            </linearGradient>
          </defs>
        </svg>


      </div>

      <div class="belief-title">
        <h3>挑戦</h3>
      </div>

      <p class="belief-text">常に挑戦し続けていく。目標を立て、達成のために何を行うべきかを逆算して一つ一つ確実に行動していくようにしています。<br>
      今年の6月からバックエンドエンジニアとなるために行動してきました。<br>
      現在はAWSを学び、クラウドでのインフラサービス構築に挑戦しています。
      </p>

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


<script scoped>
import NextButton from '../components/NextButton.vue'
import BackButton from '../components/BackButton.vue'

export default {
  data() {
    return {
      nextUrl: '/works',
      backUrl: '/about/history2'
    }
  },
  components: {
    NextButton,
    BackButton
  },
}
</script>

<style>
#belief {
  height:  90vh;
  width: 100%;
  position: relative;
  font-family: 'futura_r','Helvetica Neue','Helvetica','Arial','Avenir','Hiragino Sans',游ゴシック体, 'Yu Gothic', YuGothic,'ヒラギノ角ゴシック','メイリオ', Meiryo,'ＭＳ Ｐゴシック','MS PGothic', sans-serif;
}
#belief h1 {
  text-align: left;
  font-size: 3.5rem;
  color: #072142;
  letter-spacing: 0.12em;
  font-family: "futura_m";
  margin-right: 3.2rem;
  padding-top: 1rem;
  margin-bottom: 5vh;
}
.belief-col {
  padding:20px;
}
.belief-img {
  width: 42.016%;
    margin: 0 auto 2.4rem;
}
.belief-img svg {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    width: 100%;
}
.belief-img img {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    width: 100%;
}
#charity{
  fill: url("#gradient1");
}
.stop1 {
  stop-color: rgba(32,75,196,1);
}
.stop2 {
  stop-color: rgba(30,149,228,1) ;
}
.stop3 {
  stop-color: rgba(2,236,232,1);
}
#book-open {
  fill: url("#gradient2");
}
#summit {
  fill: url("#gradient3");
}
.belief-img .learn{
  fill: royalblue;
}
.belief-img .cooperate{
  fill: royalblue;
}
.belief-title {
    font-size: 1.5rem;
    margin-bottom: 1.6rem;
    color: #072142;
    text-align: center;
    letter-spacing: 0.2em;
    line-height: 1.2;
    font-family: "futura_de";
    word-break: break-all;
}
.belief-text {
    line-height: 2;
    word-wrap: break-word;
    white-space: normal;
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
  #belief {
    height: 100vh;
  }
  #belief h1{
    font-size: 1.8rem;
    margin-bottom: 1vh;
  }
  .hide_mobile {
    display:none
  }
  .hide_pc {
    display:block
  }
}
</style>

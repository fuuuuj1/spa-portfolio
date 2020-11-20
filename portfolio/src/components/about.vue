<template>
  <div class="about-me">

    <div id="profile">
      <v-container>
      <h1 class="heading">Profile</h1>

      <v-row>

      <v-col cols="6">
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

      <v-col cols=6>
      <div class="profile-photo">
        <v-img
          v-bind:src="profile_src">
        </v-img>
      </div>
      </v-col>

      </v-row>
      </v-container>
    </div>


      <!-- ランダムに画像を配置するfanctionの実装 画像は6枚ほど？ toolchipの設定 -->
    <image-view/>

    <div id="history">

      <v-container :fulid="true">
      <h1>Work history</h1>

        <v-row>

            <v-col cols="7">
              <div class="first-work-title">
                <h3>(2014 - 2019) 宇治徳洲会病院</h3>
              </div>

              <div class="first-work-text">
                <p>救急の現場で活躍できる人材になりたい思いがあり入職</p>
                <p>日々の業務に邁進するだけでなく、チームのために行動してきた結果、主任レベルの方々が参加するマネジメント研修会のメンバーとなり、チーム運営の技術、モチベーション向上などの方法を学習、実践する</p>
                <p>災害対応の研修や防災訓練などに主体的に参加することで、1000名以上いる職員の中からDMATメンバーに選出される</p>
              </div>
            </v-col>

          <v-col cols="5">
            <div class="first-work-image">
              <v-img
                v-bind:src="ujitoku_src">
              </v-img>
            </div>
          </v-col>

        </v-row>

        <!-- <div>
          <v-icon x-large>mdi-transfer-down</v-icon>
        </div> -->

      <v-row>

        <v-col cols="5">
        <div class="second-work-image">
          <v-img
            v-bind:src="kousei_src">
          </v-img>
        </div>
        </v-col>

        <v-col cols="7">
          <div class="second-work-title">
            <h3>(2020 - 現在) 興生総合病院</h3>
          </div>
          <div class="second-work-text">
            <p>家庭の事情により一時広島に戻ることに</p>
            <p></p>
          </div>
        </v-col>

      </v-row>

      </v-container>
    </div>


    <!-- belief部分の記載 -->
    <my-belief/>

    <div id="next">
      <!-- 今後学んでいくこと、将来目指す人物象の宣言 -->
    </div>


  </div>
</template>

<script>
import ImageView from './ImageView.vue'
import MyBelief from './MyBelief.vue'
export default {
  data() {
    return {
      profile_src: require("@/assets/imags/IMG_0711.jpeg"),
      ujitoku_src: require("@/assets/imags/ujitoku.jpg"),
      kousei_src: require("@/assets/imags/kousei.jpg"),
    }
  },
  components: {
    MyBelief,
    ImageView,
  }
}
</script>

<style scope>
#profile {
  height: 100vh;
  width: 100%;
  margin-top: 3vh;
  position: relative;
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
#history {
  height: 95vh;
  width: 100%;
}
#history h1 {
  text-align: left;
  font-size: 3.5rem;
  color: #072142;
  letter-spacing: 0.12em;
  font-family: "futura_m";
  margin-right: 3.2rem;
  padding-top: 1rem;
  margin-bottom: 5vh;
}
.first-work-title {
  text-align: left;
  font-size: 1.3rem;
  letter-spacing: 0.15em;
  font-weight: bold;
  margin-bottom: 1.3rem;
}
.first-work-text {
  text-align: left;
  letter-spacing: 0.08rem;
  line-height: 1.9;
}
.second-work-title {
  text-align: left;
  font-size: 1.3rem;
  letter-spacing: 0.15em;
  font-weight: bold;
  margin-bottom: 1.3rem;
}
.second-work-text {
  text-align: left;
  letter-spacing: 0.08rem;
  line-height: 1.9;
}
</style>

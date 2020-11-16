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

    <div id="favorite">
      <!-- ランダムに画像を配置するfanctionの実装 画像は6枚ほど？ toolchipの設定 -->
    </div>

    <div id="history">

      <v-container :fulid="true">
      <h1>Work history</h1>

        <v-row>

            <v-col cols="8">
              <div class="first-work-title">
                <h3>2014 - 2019 宇治徳洲会病院</h3>
              </div>

              <div class="first-work-text">
                <p>簡単な説明文</p>
                  <ul>
                    <li>冷静に行動する</li>
                    <li>順序立てて仕事をこなしていく</li>
                    <li>どのような方とも円滑にコミュニケーションをとる</li>
                  </ul>
                <p>慌ただしい救急の現場であるが故に医療の知識だけでなく、この3つの力が鍛えられました</p>
              </div>
            </v-col>

          <v-col cols="4">
            <div class="first-work-image">
              <v-img
                lazy-src="https://picsum.photos/id/11/10/6"
                max-height="300"
                max-width="368"
                src="https://picsum.photos/id/11/500/300">
              </v-img>
            </div>
          </v-col>

        </v-row>

      <v-row>

        <v-col cols="4">
        <div class="second-work-image">
          <v-img
            lazy-src="https://picsum.photos/id/11/10/6"
            max-height="300"
            max-width="368"
            src="https://picsum.photos/id/11/500/300">
          </v-img>
        </div>
        </v-col>

        <v-col cols="8">
          <div class="second-work-title">
            <h3>2020 - 現在 興生総合病院</h3>
          </div>
          <div class="second-work-text">
            <p>転職の経緯</p>
            <p>スキルマップの話</p>
          </div>
        </v-col>

      </v-row>

      </v-container>
    </div>

    <div id="belief">
      <!-- card viewで表現 3つ配置する -->
    </div>

    <div id="next">
      <!-- 今後学んでいくこと、将来目指す人物象の宣言 -->
    </div>


  </div>
</template>

<script>
export default {
  data() {
    return {
      profile_src: require("@/assets/imags/IMG_0711.jpeg"),
    }
  },
}
</script>

<style scope>
#profile {
  height: 100vh;
  width: 100%;
  margin-top: 3vh;
}
#profile h1 {
  text-align: left;
  font-size: 3.5rem;
  color: #072142;
  letter-spacing: 0.2em;
  font-family: "futura_m";
  margin-right: 3.2rem;
  padding-top: 1.2rem;
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
  height: 90vh;
  width: 100%;
}
#history h1 {
  text-align: left;
  text-align: left;
  font-size: 3.5rem;
  color: #072142;
  letter-spacing: 0.12em;
  font-family: "futura_m";
  margin-right: 3.2rem;
  padding-top: 1.2rem;
}
.row {
  margin-top:5vh;
}
</style>

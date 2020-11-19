<template>
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
</template>

<script>
export default {
  data() {
    return {
      ujitoku_src: require("@/assets/imags/ujitoku.jpg"),
      kousei_src: require("@/assets/imags/kousei.jpg"),
    }
  },
}
</script>

<style>
#history {
  height: 100vh;
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
}
.row {
  margin-top:5vh;
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

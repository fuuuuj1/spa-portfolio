<template>
<div id="contact">

  <v-container>

    <v-row>

      <div class="contact-view">

        <div class="contact-title">
        <h1 class="header">Contact</h1>
        </div>

        <div class="contact-bg"></div>

      </div>

    </v-row>

    <v-row class="contact-link">
        <v-col cols="4">
          <a href="" class="twitter">
          <v-icon
          size="80"
          color="#40C4FF"
          >mdi-twitter</v-icon>
          </a>
        </v-col>

        <v-col cols="8">
          <div class="contact-text">
            <span>もし、私に興味を持っていただけましたらDMからの連絡お待ちしております</span>
            <span><a href="" class="wantedly">Wantedly</a>もよろしければ見ていってください</span>
          </div>
        </v-col>
    </v-row>

  </v-container>

</div>
</template>

<script>
</script>

<style scope>
#contact {
  width: 100%;
  height: 90vh;
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
}
.contact-view {
  position: relative;
    width: 100%;
    height: 400px;
    margin: 0 auto;
  margin-bottom: 50px;
}
.contact-bg {
  background: url("~@/assets/imags/dam-water.jpg")  no-repeat center;
  background-size: cover;
  position: absolute;
    top: 15%;
    right: 0%;
    width: 65%;
    height: 100%;
  z-index: -1;
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
.twitter {
  text-decoration: none;
}
</style>

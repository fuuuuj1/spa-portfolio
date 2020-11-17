<template>
<div id="belief">
  <v-container>
  <h1 class="heading">Belief</h1>

  <v-row>
    <v-col>
      <div class="belief-img">
        <img src="../assets/icons/charity.svg" alt="握手" class="useful">
      </div>

      <div class="belief-title">
        <h3>多くの人の助けになる</h3>
      </div>

      <div class="belief-text"></div>
    </v-col>

    <v-col>
      <div class="belief-img">
        <img src="../assets/icons/book-open-variant.svg" alt="本のアイコン" class="learn">
      </div>

      <div class="belief-title">
        <h3>学んだことを活かす</h3>
      </div>
      <div class="belief-text"></div>
    </v-col>

    <v-col>
      <div class="belief-img">
        <img src="../assets/icons/account-group.svg" alt="グループのアイコン" class="cooperate">
      </div>

      <div class="belief-title">
        <h3>互いに高め合う</h3>
      </div>
      <div class="belief-text"></div>
    </v-col>


  </v-row>

  </v-container>
</div>
</template>


<script>
</script>

<style>
#belief {
  height: 100vh;
  width: 100%;
  margin-top: 15vh;
}
#belief h1 {
  text-align: left;
  font-size: 3.5rem;
  color: #072142;
  letter-spacing: 0.12em;
  font-family: "futura_m";
  margin-right: 3.2rem;
  padding-top: 1rem;
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
.belief-img .useful{
  fill: royalblue;
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
.belief-text p {
    line-height: 2;
    word-wrap: break-word;
    white-space: normal;
}

</style>

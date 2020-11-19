<template>
  <div class="home">

    <div class="carousel-view">
    <v-carousel
    :show-arrows="false"
    :hide-delimiter-background="true"
    :height="450"
    :class="`rounded-b-xl`"
    class="home-carousel"
    >
      <v-carousel-item
        v-for="(item,i) in items"
        :key="i"
        :src="item.src">
      </v-carousel-item>
    </v-carousel>
    </div>

    <div class="declaration">
      <h1>WEBエンジニアになるため転職活動中！</h1>
      <p>関西でバックエンドエンジニア志望</p>
      <p>独学でPHP,Laravel,Vue,Dockerを学習しました Gitを使用しての共同開発経験あり</p>
    </div>

  </div>
</template>

<script>
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
      }
    },
  }

</script>

<style>
.home .carousel-view {
  width: 100%;
  height: 60%;
  border-radius: 0% 0% 50% 50% / 0% 0% 50% 50% !important;
}
.home-carousel {
  border-radius: 0% 0% 50% 50% / 0% 0% 20% 20% !important;
}
.declaration {
  margin: 60px auto 30px;
}
.declaration h1 {
  color: red;
  margin: 30px auto;
}
.declaration p {
  font-weight: bold;
}

</style>

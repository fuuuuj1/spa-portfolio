<template>
  <v-btn class="next-btn">
    <v-icon>mdi-arrow-right</v-icon>
  </v-btn>
</template>

// to="next-link"を表示させているコンポーネント毎に変化させるには？
// コンポーネント毎にnext-link,back-linkのデータ？配列を持たせて適応させるとか？？

<style>
.next-btn {
  position: absolute;
    bottom: 0%;
    right: 0%;
}
</style>

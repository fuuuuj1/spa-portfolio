<template>
      <v-btn class="next-btn"
      icon
      :to="nextUrl"
      >
        <v-icon size="70">mdi-arrow-right</v-icon>
      </v-btn>
    <!-- <img src="../assets/icons/ifn0770.svg" class="next-btn-icon"> -->
    <!-- <svg src="../assets/icons/ifn0770.svg"
      :width="width"
      :height="height">
      <title
        :id="iconName"
        lang="en">
        {{ iconName }} icon</title>
        <g :fill="iconColor">
          <slot />
        </g>
    </svg> -->

</template>

// to="next-link"を表示させているコンポーネント毎に変化させるには？
// コンポーネント毎にnext-link,back-linkのデータ？配列を持たせて適応させるとか？？

<script>
export default {
  props: {
    nextUrl: {
      type: String,
      required: true
    },
    // iconName: {
    //   type: String,
    //   default: 'arrow'
    // },
    // width: {
    //   type: [Number, String],
    //   default: 18
    // },
    // height: {
    //   type: [Number, String],
    //   default: 18
    // },
    // iconColor: {
    //   type: String,
    //   default: 'currentColor'
    // }
  }
}
</script>

<style scoped>

.next-btn {
  position: absolute;
    bottom: 3%;
    right: 3%;
    transition: all 1s;
}
.next-btn::before{
background-color: #eeeeee;
}
.next-btn:hover{
  transform:translateX(15px);
}
</style>

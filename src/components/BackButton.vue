<template>
      <v-btn class="back-btn"
      icon
      :to="backUrl"
      >
        <v-icon size="70">mdi-arrow-left</v-icon>
      </v-btn>
</template>


<script>
export default {
  props: {
    backUrl: {
      type: String,
      required: true
    },
  }
}
</script>


<style scoped>
.back-btn {
  position: absolute;
    bottom: 3%;
    left: 3%;
    transition: all 1s;
}
.back-btn::before{
background-color: #eeeeee;
}
.back-btn:hover{
  transform:translateX(-15px);
}
</style>

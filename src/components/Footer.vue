<template>
  <!-- <div class="pd50 bg-999" :style="{background:`#fff url(${img.obj1}) no-repeat 0 86% / cover`}"> -->
  <div class="pd50 bg-999 h120 border-box">
    © 그루터기작은 도서관 2021 | 070-8779-1340 | 서울 은평구 은평로10길 17
  </div>
</template>

<script>
import  obj1 from '../assets/img/lib_img1.png'

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data: () => {
    return {
      img: {
        obj1: obj1,
      },
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

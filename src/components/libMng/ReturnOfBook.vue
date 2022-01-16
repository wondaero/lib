<template>
  <div class="h100p cf border-box">
    <section class="">
      <div class="mg-b5">
        <input type="text" class="mg-r5 w300 h40 border-box v-top border-aaa pd10">
        <button class="outline0 border0 h40 line-h40px w120 v-top color-fff" style="background:#74bb2a;"><strong>도서검색</strong></button>
      </div>
      <h5 class="mp0 mg-b10">*도서코드</h5>
    </section>
  </div>
</template>

<script>

export default {
  name: 'noticeList',
  props: {
    msg: String
  },
  data: () => {
    return {
      files: [],
      contentOpt: true,
    }
  },
  mounted () {
    const t = this;
  },
  created () {
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  label strong{padding:10px;}
  label input:checked + strong{background:#74bb2a; color:#fff;}
</style>

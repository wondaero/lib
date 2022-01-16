<template>
  <div class="pd50 bg-fff border-box" style="height:calc(100vh - 100px - 120px);">
    <h1>공지사항</h1>
    <div class="mg-b20 cf">
      <div class="float-l">
        <input type="text" class="mg-r5 w300 h50 border-box v-top border-aaa pd10">
        <button class="outline0 border0 h50 line-h50px w80 v-top" style="background:#74bb2a;">검색</button>
      </div>
      <div class="float-r line-h50px font16">
        <router-link :to="{path: '/notice', query: {type: 'write'}}"><strong>글쓰기</strong></router-link>
      </div>
    </div>
    <div class="border-b-dashed-ccc mg-v20"></div>
    <section>
      <article>
        <ul class="list-style-none mp0 bg-fff">
          <li class="cf h50 line-h50px border-b-ccc border-box pointer" @click="getDetail('view', 1);">
            <div class="float-l w50 txt-c">100</div>
            <div class="float-l w100p-250">100</div>
            <div class="float-l w200">100</div>
          </li>
          <li class="cf h50 line-h50px border-b-ccc border-box">
            <div class="float-l w50 txt-c">100</div>
            <div class="float-l w100p-250">100</div>
            <div class="float-l w200">100</div>
          </li>
          <li class="cf h50 line-h50px border-b-ccc border-box">
            <div class="float-l w50 txt-c">100</div>
            <div class="float-l w100p-250">100</div>
            <div class="float-l w200">100</div>
          </li>
          <li class="cf h50 line-h50px border-b-ccc border-box">
            <div class="float-l w50 txt-c">100</div>
            <div class="float-l w100p-250">100</div>
            <div class="float-l w200">100</div>
          </li>
          <li class="cf h50 line-h50px border-b-ccc border-box">
            <div class="float-l w50 txt-c">100</div>
            <div class="float-l w100p-250">100</div>
            <div class="float-l w200">100</div>
          </li>
          <li class="cf h50 line-h50px border-b-ccc border-box">
            <div class="float-l w50 txt-c">100</div>
            <div class="float-l w100p-250">100</div>
            <div class="float-l w200">100</div>
          </li>
          <li class="cf h50 line-h50px border-b-ccc border-box">
            <div class="float-l w50 txt-c">100</div>
            <div class="float-l w100p-250">100</div>
            <div class="float-l w200">100</div>
          </li>
          <li class="cf h50 line-h50px border-b-ccc border-box">
            <div class="float-l w50 txt-c">100</div>
            <div class="float-l w100p-250">100</div>
            <div class="float-l w200">100</div>
          </li>
          <li class="cf h50 line-h50px border-b-ccc border-box">
            <div class="float-l w50 txt-c">100</div>
            <div class="float-l w100p-250">100</div>
            <div class="float-l w200">100</div>
          </li>
          <li class="cf h50 line-h50px border-b-ccc border-box">
            <div class="float-l w50 txt-c">100</div>
            <div class="float-l w100p-250">100</div>
            <div class="float-l w200">100</div>
          </li>
        </ul>
        <ul class="mp0 txt-c pd-t20">
          <li class="inline-block mg-r10">&lt;</li>
          <li class="inline-block mg-r10">1</li>
          <li class="inline-block mg-r10">2</li>
          <li class="inline-block mg-r10">3</li>
          <li class="inline-block mg-r10">4</li>
          <li class="inline-block">&gt;</li>
        </ul>

      </article>
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
    }
  },
  methods: {
    getDetail(seq, type) {
      this.$router.push({name: 'notice', query: {type: 'view', seq: 1}})
    }

  },
  mounted() {
    const t = this;
    console.log(t.$route.query);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a{color:#000; text-decoration:none;}
</style>

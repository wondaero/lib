<template>
  <div class="h100p cf border-box">
    <section class="">
      <header>
        <div class="mg-b5 cf">
          <div class="float-l">
            <select type="text" class="w120 h40 border-box v-top border-aaa mg-r5">
              <option>전체</option>
              <option selected>회원</option>
              <option>가입승인</option>
            </select>
            <select type="text" class="w120 h40 border-box v-top border-aaa mg-r5">
              <option>전체</option>
              <option>이름</option>
              <option>전화번호</option>
              <option>회원번호</option>
            </select>
            <input type="text" class="mg-r5 w300 h40 border-box v-top border-aaa pd10">
            <button class="outline0 border0 h40 line-h40px w120 v-top color-fff" style="background:#74bb2a;">검색</button>
          </div>
          <div class="float-r h40 line-h40px pointer">
            <strong>회원가입</strong>
          </div>
        </div>
        <div class="cf">
          <div class="float-l">
            <label class="pointer">
              <input type="radio" name="bookFilter" class="none" checked />
              <strong class="txt-c inline-block v-top bg-ddd mg-r5 pd10 w120 border-box">전체</strong>
            </label>
            <label class="pointer">
              <input type="radio" name="bookFilter" class="none"/>
              <strong class="txt-c inline-block v-top bg-ddd mg-r5 pd10 w120 border-box">대여중</strong>
            </label>
            <label class="pointer">
              <input type="radio" name="bookFilter" class="none"/>
              <strong class="txt-c inline-block v-top bg-ddd pd10 w120 border-box">연체중</strong>
            </label>
          </div>
          <div class="float-r h40 line-h40px">
            <strong>3건</strong>
          </div>
        </div>
      </header>
      <div style="border-top:1px dashed #aaa" class="mg-t5"></div>
      <ul class="list-style-none mp0 overflow-y-auto" style="height:calc(100% - 61px);">
        <li class="border-b-ccc pd5 cf">
          <div class="float-l w100p-180">
            <div class="txt-overflow">
              <strong>원대로</strong> 
              <span>[999]</span>
              <span class="mg-r5">[wondaero]</span>
              <strong class="bg-red color-fff radius50 pd5 inline-block font12 txt-c">연체중</strong>
            </div>
            <div class="txt-overflow">
              <span class="font14">010-8580-5167</span>
            </div>
          </div>
          <div class="float-l w180">
            <div class="mg-b5 txt-r">
              <strong>대여현황: <span>4 / 5</span></strong> 
            </div>
          </div>
        </li>
        <li class="border-b-ccc pd5 cf">
          <div class="float-l w100p-180">
            <div class="txt-overflow">
              <strong>원대로</strong> 
              <span>[999]</span>
              <span class="mg-r5">[wondaero]</span>
              <strong class="bg-red color-fff radius50 pd5 inline-block font12 txt-c">연체중</strong>
            </div>
            <div class="txt-overflow">
              <span class="font14">010-8580-5167</span>
            </div>
          </div>
          <div class="float-l w180">
            <div class="mg-b5 txt-r">
              <strong>대여현황: <span>4 / 5</span></strong> 
            </div>
          </div>
        </li>
      </ul>
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
  label strong{padding:10px; transition:all .5s;}
  label input:checked + strong{background:#74bb2a; color:#fff;}
</style>

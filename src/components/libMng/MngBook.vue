<template>
  <div class="h100p cf border-box">
    <section class="">
      <header>
        <div class="mg-b5">
          <select type="text" class="w120 h40 border-box v-top border-aaa mg-r5">
            <option>도서코드</option>
            <option>제목</option>
            <option>저자</option>
            <option>출판사</option>
          </select>
          <input type="text" class="mg-r5 w300 h40 border-box v-top border-aaa pd10">
          <button class="outline0 border0 h40 line-h40px w120 v-top color-fff" style="background:#74bb2a;">검색</button>
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
          <div class="float-l w100p-120">
            <div class="mg-b5 txt-overflow">
              <strong class="mg-r5">[EM00000001]</strong> 
              <span>글로벌 만화 교과서 세계사</span> / <span>청나라의 멸망과 중국혁명</span>
            </div>
            <div class="txt-overflow">
              <span>역사교육교재연구원 글.구성,최복기 만화</span> |  <span>교연아카데미</span>
            </div>
          </div>
          <div class="float-l w120">
            <div class="mg-b5 txt-r">
              <strong class="color-green">대여중</strong> 
              <strong>(원대로)</strong>
            </div>
            <div class="txt-r">
              <strong class="color-42c7d5 mg-r5">[808.9]</strong><strong>앤884ㅅ</strong>
            </div>
          </div>
        </li>
        <li class="border-b-ccc pd5 cf">
          <div class="float-l w100p-120">
            <div class="mg-b5 txt-overflow">
              <strong class="mg-r5">[EM00000001]</strong> 
              <span>글로벌 만화 교과서 세계사</span> / <span>청나라의 멸망과 중국혁명</span>
            </div>
            <div class="txt-overflow">
              <span>역사교육교재연구원 글.구성,최복기 만화</span> |  <span>교연아카데미</span>
            </div>
          </div>
          <div class="float-l w120">
            <div class="mg-b5 txt-r">
              <strong class="color-green">대여중</strong> 
              <strong>(원대로)</strong>
            </div>
            <div class="txt-r">
              <strong class="color-42c7d5 mg-r5">[808.9]</strong><strong>앤884ㅅ</strong>
            </div>
          </div>
        </li>
        <li class="border-b-ccc pd5 cf">
          <div class="float-l w100p-120">
            <div class="mg-b5 txt-overflow">
              <strong class="mg-r5">[EM00000001]</strong> 
              <span>글로벌 만화 교과서 세계사</span> / <span>청나라의 멸망과 중국혁명</span>
            </div>
            <div class="txt-overflow">
              <span>역사교육교재연구원 글.구성,최복기 만화</span> |  <span>교연아카데미</span>
            </div>
          </div>
          <div class="float-l w120">
            <div class="mg-b5 txt-r">
              <strong class="color-green">대여중</strong> 
              <strong>(원대로)</strong>
            </div>
            <div class="txt-r">
              <strong class="color-42c7d5 mg-r5">[808.9]</strong><strong>앤884ㅅ</strong>
            </div>
          </div>
        </li>
        <li class="border-b-ccc pd5 cf">
          <div class="float-l w100p-120">
            <div class="mg-b5 txt-overflow">
              <strong class="mg-r5">[EM00000001]</strong> 
              <span>글로벌 만화 교과서 세계사</span> / <span>청나라의 멸망과 중국혁명</span>
            </div>
            <div class="txt-overflow">
              <span>역사교육교재연구원 글.구성,최복기 만화</span> |  <span>교연아카데미</span>
            </div>
          </div>
          <div class="float-l w120">
            <div class="mg-b5 txt-r">
              <strong class="color-green">대여중</strong> 
              <strong>(원대로)</strong>
            </div>
            <div class="txt-r">
              <strong class="color-42c7d5 mg-r5">[808.9]</strong><strong>앤884ㅅ</strong>
            </div>
          </div>
        </li>
        <li class="border-b-ccc pd5 cf">
          <div class="float-l w100p-120">
            <div class="mg-b5 txt-overflow">
              <strong class="mg-r5">[EM00000001]</strong> 
              <span>글로벌 만화 교과서 세계사</span> / <span>청나라의 멸망과 중국혁명</span>
            </div>
            <div class="txt-overflow">
              <span>역사교육교재연구원 글.구성,최복기 만화</span> |  <span>교연아카데미</span>
            </div>
          </div>
          <div class="float-l w120">
            <div class="mg-b5 txt-r">
              <strong class="color-green">대여중</strong> 
              <strong>(원대로)</strong>
            </div>
            <div class="txt-r">
              <strong class="color-42c7d5 mg-r5">[808.9]</strong><strong>앤884ㅅ</strong>
            </div>
          </div>
        </li>
        <li class="border-b-ccc pd5 cf">
          <div class="float-l w100p-120">
            <div class="mg-b5 txt-overflow">
              <strong class="mg-r5">[EM00000001]</strong> 
              <span>글로벌 만화 교과서 세계사</span> / <span>청나라의 멸망과 중국혁명</span>
            </div>
            <div class="txt-overflow">
              <span>역사교육교재연구원 글.구성,최복기 만화</span> |  <span>교연아카데미</span>
            </div>
          </div>
          <div class="float-l w120">
            <div class="mg-b5 txt-r">
              <strong class="color-green">대여중</strong> 
              <strong>(원대로)</strong>
            </div>
            <div class="txt-r">
              <strong class="color-42c7d5 mg-r5">[808.9]</strong><strong>앤884ㅅ</strong>
            </div>
          </div>
        </li>
        <li class="border-b-ccc pd5 cf">
          <div class="float-l w100p-120">
            <div class="mg-b5 txt-overflow">
              <strong class="mg-r5">[EM00000001]</strong> 
              <span>글로벌 만화 교과서 세계사</span> / <span>청나라의 멸망과 중국혁명</span>
            </div>
            <div class="txt-overflow">
              <span>역사교육교재연구원 글.구성,최복기 만화</span> |  <span>교연아카데미</span>
            </div>
          </div>
          <div class="float-l w120">
            <div class="mg-b5 txt-r">
              <strong class="color-green">대여중</strong> 
              <strong>(원대로)</strong>
            </div>
            <div class="txt-r">
              <strong class="color-42c7d5 mg-r5">[808.9]</strong><strong>앤884ㅅ</strong>
            </div>
          </div>
        </li>
        <li class="border-b-ccc pd5 cf">
          <div class="float-l w100p-120">
            <div class="mg-b5 txt-overflow">
              <strong class="mg-r5">[EM00000001]</strong> 
              <span>글로벌 만화 교과서 세계사</span> / <span>청나라의 멸망과 중국혁명</span>
            </div>
            <div class="txt-overflow">
              <span>역사교육교재연구원 글.구성,최복기 만화</span> |  <span>교연아카데미</span>
            </div>
          </div>
          <div class="float-l w120">
            <div class="mg-b5 txt-r">
              <strong class="color-green">대여중</strong> 
              <strong>(원대로)</strong>
            </div>
            <div class="txt-r">
              <strong class="color-42c7d5 mg-r5">[808.9]</strong><strong>앤884ㅅ</strong>
            </div>
          </div>
        </li>
        <li class="border-b-ccc pd5 cf">
          <div class="float-l w100p-120">
            <div class="mg-b5 txt-overflow">
              <strong class="mg-r5">[EM00000001]</strong> 
              <span>글로벌 만화 교과서 세계사</span> / <span>청나라의 멸망과 중국혁명</span>
            </div>
            <div class="txt-overflow">
              <span>역사교육교재연구원 글.구성,최복기 만화</span> |  <span>교연아카데미</span>
            </div>
          </div>
          <div class="float-l w120">
            <div class="mg-b5 txt-r">
              <strong class="color-green">대여중</strong> 
              <strong>(원대로)</strong>
            </div>
            <div class="txt-r">
              <strong class="color-42c7d5 mg-r5">[808.9]</strong><strong>앤884ㅅ</strong>
            </div>
          </div>
        </li>
        <li class="border-b-ccc pd5 cf">
          <div class="float-l w100p-120">
            <div class="mg-b5 txt-overflow">
              <strong class="mg-r5">[EM00000001]</strong> 
              <span>글로벌 만화 교과서 세계사</span> / <span>청나라의 멸망과 중국혁명</span>
            </div>
            <div class="txt-overflow">
              <span>역사교육교재연구원 글.구성,최복기 만화</span> |  <span>교연아카데미</span>
            </div>
          </div>
          <div class="float-l w120">
            <div class="mg-b5 txt-r">
              <strong class="color-green">대여중</strong> 
              <strong>(원대로)</strong>
            </div>
            <div class="txt-r">
              <strong class="color-42c7d5 mg-r5">[808.9]</strong><strong>앤884ㅅ</strong>
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

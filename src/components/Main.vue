<template>
  <div>
    <div class="bg-eee h500" :style="{background: `url(${img.mainBg}) no-repeat 50% / cover`}">
      <!-- <img :src="img.mainBg" alt="" width="100%" class="v-top"> -->
    </div>
    <div class="relative h520">
      <div class="absolute bottom0 w100p border-box" style="background:linear-gradient(175deg, transparent 110px, #fff 0);">
        <div class="pd-h20 txt-c">
          <div class="inline-block v-top pd-t150 mg-r60 txt-l">
            <h2 class="mg0 font-fam1">
              <span class="font30 font-w100 inline-block relative left-30" style="transform:rotate(-5deg);">
                <span class="font36" style="color:#74bb2a;">다음세대</span>와 <span class="font36" style="color:#74bb2a;">지역사회</span>를 품는<br>
                <span class="font36" style="color:#74bb2a;">비전</span>을 가진
              </span>
              <br>
              <span class="font90" style="text-shadow:5px 5px 3px #bbb;">그루터기 작은도서관</span>
            </h2>
            <p ref="interaction1" class="font-fam2" style="font-size:28px;">
              <span><strong style="color:#74bb2a; font-size:40px;">L</strong> ibrary with a vision that</span><br>
              <span><strong style="color:#74bb2a; font-size:40px;">E</strong> mbraces the</span><br>
              <span><strong style="color:#74bb2a; font-size:40px;">N</strong> ext generation and</span><br>
              <span><strong style="color:#74bb2a; font-size:40px;">T</strong> own</span>
            </p>
          </div>
          <div class="inline-block v-top bg-fff pd15 inline-block v-top txt-l mg-b50" style="box-shadow:0 0 5px #888;">
            <h3 class="mp0 mg-b10">도서검색</h3>
            <input type="text" class="mg-r5 w300 h50 border-box v-top border-aaa pd10">
            <button class="outline0 border0 h50 line-h50px w80 v-top" style="background:#74bb2a;">검색</button>
            <p class="mg-b0">
            <img :src="img.searchBook" alt="도서검색" width="385" class="v-top" />
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="pd-v50 bg-fcfcfc">
      <ul class="txt-c list-style-none mp0">
        <li class="inline-block w150 h150 v-top mg-r20 pd10 border-box">
          <figure class="mp0 vertical-m">
            <img :src="img.quick.quickInfo" alt="도서관소개" width="80">
            <figcaption>도서관소개</figcaption>
          </figure>
        </li>
        <li class="inline-block w150 h150 v-top mg-r20 pd10 border-box">
          <figure class="mp0 vertical-m">
            <img :src="img.quick.quickGuide" alt="도서관소개" width="80">
            <figcaption>이용안내</figcaption>
          </figure>
        </li>
        <li class="inline-block w150 h150 v-top mg-r20 pd10 border-box">
          <figure class="mp0 vertical-m">
            <img :src="img.quick.quickRequest" alt="도서관소개" width="80">
            <figcaption>도서신청</figcaption>
          </figure>
        </li>
        <li class="inline-block w150 h150 v-top mg-r20 pd10 border-box">
          <figure class="mp0 vertical-m">
            <img :src="img.quick.quickChart" alt="도서관소개" width="80">
            <figcaption>통계</figcaption>
          </figure>
        </li>
        <li class="inline-block w150 h150 v-top mg-r20 pd10 border-box">
          <figure class="mp0 vertical-m">
            <img :src="img.quick.quickLocation" alt="도서관소개" width="80">
            <figcaption>오시는길</figcaption>
          </figure>
        </li>
        <li class="inline-block w150 h150 v-top mg-r20 pd10 border-box">
          <figure class="mp0 vertical-m">
            <img :src="img.quick.quickShare" alt="도서관소개" width="80">
            <figcaption>물품나눔터</figcaption>
          </figure>
        </li>
      </ul>
    </div>
    <div class="cf">
        <div class="float-l w100p-500 h300 bg-red" :style="{background: `url('${img.obj1}') no-repeat 50% 100% / contain`}"></div>
        <div class="float-r w500 h300" :style="{background: `#fff url('${img.bgPattern1}')`}">
          <strong class="vertical-m txt-c font40">ADV</strong>
        </div>
    </div>
    <div class="cf pd50 bg-eee">
      <div class="float-l w525 bg-fff pd10 border-box mg-r50">
        <div class="mg-b5 cf">
          <h4 class="mg0 float-l">공지사항</h4>
          <strong class="float-r">더보기</strong>
        </div>
        <ul class="list-style-none mp0 min-h250">
          <li class="cf h50 line-h50px border-b-00000080 border-box">
            <div class="float-l w80p">111</div>
            <div class="float-r w20p">22</div>
          </li>
          <li class="cf h50 line-h50px border-b-00000080 border-box">
            <div class="float-l w80p">111</div>
            <div class="float-r w20p">22</div>
          </li>
          <li class="cf h50 line-h50px border-b-00000080 border-box">
            <div class="float-l w80p">111</div>
            <div class="float-r w20p">22</div>
          </li>
          <li class="cf h50 line-h50px border-b-00000080 border-box">
            <div class="float-l w80p">111</div>
            <div class="float-r w20p">22</div>
          </li>
          <li class="cf h50 line-h50px border-b-00000080 border-box">
            <div class="float-l w80p">111</div>
            <div class="float-r w20p">22</div>
          </li>
        </ul>
      </div>
      <div class="float-l w525 bg-fff pd10 border-box">
        <div class="mg-b5 cf">
          <h4 class="mg0 float-l">신간도서</h4>
          <strong class="float-r">더보기</strong>
        </div>
        <ul class="list-style-none mp0 min-h250">
          <li class="cf h50 line-h50px border-b-00000080 border-box">
            <div class="float-l w80p">111</div>
            <div class="float-r w20p">22</div>
          </li>
          <li class="cf h50 line-h50px border-b-00000080 border-box">
            <div class="float-l w80p">111</div>
            <div class="float-r w20p">22</div>
          </li>
          <li class="cf h50 line-h50px border-b-00000080 border-box">
            <div class="float-l w80p">111</div>
            <div class="float-r w20p">22</div>
          </li>
          <li class="cf h50 line-h50px border-b-00000080 border-box">
            <div class="float-l w80p">111</div>
            <div class="float-r w20p">22</div>
          </li>
          <li class="cf h50 line-h50px border-b-00000080 border-box">
            <div class="float-l w80p">111</div>
            <div class="float-r w20p">22</div>
          </li>
        </ul>
      </div>
    </div>
      
  </div>
</template>

<script>
import  obj1 from '../assets/img/lib_img1.png'
import  searchBook from '../assets/img/search_book.png'
// import mainBg from '../assets/img/lib_img_pc.png'
import mainBg from '../assets/img/lib_picture1.png'

import quickChart from '../assets/img/quick/quick_chart.png'
import quickGuide from '../assets/img/quick/quick_guide.png'
import quickInfo from '../assets/img/quick/quick_info.png'
import quickLocation from '../assets/img/quick/quick_location.png'
import quickRequest from '../assets/img/quick/quick_request.png'
import quickShare from '../assets/img/quick/quick_share.png'

import bgPattern1 from '../assets/img/bg-pattern1.png'




export default {
  name: 'HelloWorld',
  props: {
    msg: String,
  },
  data: () => {
    return {
      img: {
        mainBg: mainBg,
        bgPattern1: bgPattern1,
        obj1: obj1,
        searchBook: searchBook,
        quick: {
          quickChart: quickChart,
          quickGuide: quickGuide,
          quickInfo: quickInfo,
          quickLocation: quickLocation,
          quickRequest: quickRequest,
          quickShare: quickShare,
        }
      },
    }
  },
  mounted() {
    this.interaction1();
  },
  methods: {
    interaction1() {
      // console.log(this.$refs.interaction1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

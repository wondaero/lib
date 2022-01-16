<template>
  <div class="">
    <div class="fixed top0 left0 right0 bottom0 z-idx2 pd50 mn-w1200" style="background:linear-gradient(to bottom, #fff, #fff, green);">
      <section class="w100p h100p radius10 relative bg-eee" style="box-shadow:0 0 5px #555;">
        <nav class="cf w200 h100p overflow-hidden" style="border-radius:10px 0 0 10px">
          <ul class="list-style-none mp0 h100p color-fff" style="background:#74bb2a;">
            <li class="pd-v30 pd-l20 border-box pointer" data-page="regBook" style="border-bottom:1px solid #ffffff4d;" @click="view='regBook'"><strong>도서등록</strong></li>
            <li class="pd-v30 pd-l20 border-box pointer" data-page="mngBook" style="border-bottom:1px solid #ffffff4d;" @click="view='mngBook'"><strong>도서관리</strong></li>
            <li class="pd-v30 pd-l20 border-box pointer" data-page="takeOutBook" style="border-bottom:1px solid #ffffff4d;" @click="view='takeOutBook'"><strong>도서대여</strong></li>
            <li class="pd-v30 pd-l20 border-box pointer" data-page="returnOfBook" style="border-bottom:1px solid #ffffff4d;" @click="view='returnOfBook'"><strong>도서반납</strong></li>
            <li class="pd-v30 pd-l20 border-box pointer" data-page="mngMember" style="border-bottom:1px solid #ffffff4d;" @click="view='mngMember'"><strong>회원관리</strong></li>
            <li class="pd-v30 pd-l20 border-box pointer" style="border-bottom:1px solid #ffffff4d;"><strong>바코드출력</strong></li>
            <li class="pd-v30 pd-l20 border-box pointer" style="border-bottom:1px solid #ffffff4d;"><strong>메모</strong></li>
            <li class="pd-v30 pd-l20 border-box pointer" style="border-bottom:1px solid #ffffff4d;"><strong>마스터</strong></li>
          </ul>
        </nav>
        <div class="absolute right-25 top-25 radius50p bg-fff w50 h50 txt-c pointer" style="box-shadow:0 0 5px #555;" @click="goToMain">
          <img :src="img.btn_x" alt="닫기" height="30" class="top10 relative" />
        </div>
        <section ref="mngPage" class="mng-page on absolute top30 left140 right10 bottom30 bg-fff radius10 op0 pd20" style="box-shadow:0 0 5px #555;">
          <reg-book v-if="view == 'regBook'"></reg-book>
          <mng-book v-else-if="view == 'mngBook'"></mng-book>
          <take-out-book v-else-if="view == 'takeOutBook'"></take-out-book>
          <return-of-book v-else-if="view == 'returnOfBook'"></return-of-book>
          <mng-member v-else-if="view == 'mngMember'"></mng-member>
        </section>
        <aside class="fixed top0 left0 right0 bottom0 bg-000-0_5 none">
          <section class="vertical-m w1000 bg-fff radius20 mg0auto pd30">
            <div class="absolute right-25 top-25 radius50p bg-fff w50 h50 txt-c pointer" style="box-shadow:0 0 5px #555;" @click="goToMain">
              <img :src="img.btn_x" alt="닫기" height="30" class="top10 relative" />
            </div>
            <!-- <header class="txt-r">
              <img :src="img.btn_x" alt="닫기" height="30" class="v-top" />
            </header> -->
            <reg-book-pop></reg-book-pop>
          </section>
        </aside>
      </section>
    </div>
  </div>
</template>

<script>
import  btn_x from '../assets/img/btn_x.svg';

import regBook from "@/components/libMng/RegBook.vue";
import mngBook from "@/components/libMng/MngBook.vue";
import takeOutBook from "@/components/libMng/TakeOutBook.vue";
import returnOfBook from "@/components/libMng/ReturnOfBook.vue";
import mngMember from "@/components/libMng/MngMember.vue";
import regBookPop from "@/components/libMng/popup/RegBookPop.vue";

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  components: {
    regBook,
    mngBook,
    takeOutBook,
    returnOfBook,
    mngMember,
  //popup
    regBookPop,
  },
  data: () => {
    return {
      img: {
        btn_x: btn_x,
      },
      view: '',
      popup: {
        view: '',
        content: ''
      }
    }
  },
  mounted() {
    const t = this;
    t.view = 'regBook';
  },
  watch: {
    view: function(newVal, oldVal){
      const t = this;
      const li = document.querySelectorAll('ul li');
      li.forEach((el) => {
        el.style.background = null;
        if(el.getAttribute('data-page') == newVal) el.style.background = '#0000004d';
        t.$refs.mngPage.classList.remove('on');
        setTimeout(() => {
          t.$refs.mngPage.classList.add('on');
        }, 100);

      })
    }
  },
  methods: {
    goToMain() {
      const t = this;
      t.$router.push({ name: 'main'})
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul [data-page]:hover{background:#0000004d;}
  section.mng-page.on{transition:all .5s linear; opacity:1; left:120px; right:30px;}
  li:not([data-page]){background:#ffffff4d;}
</style>

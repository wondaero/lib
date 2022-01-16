<template>
  <header class="absolute bg-fff w100p top0 left0">
    <div class="bg-eee cf pd-h10 h30 line-h30px">
      <div class="float-r">
        <strong class="mp0 mg-r10">로그인</strong>
        <strong class="mp0">회원가입</strong>
      </div>
    </div>
    <div class="cf pd10 relative z-idx1 h70 border-box" style="background:linear-gradient(to top, #0000001a 1px, #fff 0);">
      <h1 class="mg0 float-l pointer">
        <router-link :to="{path: '/'}">
          <img src="../assets/img/logo1.svg" alt="로고" height="50" class="v-top">
        </router-link>
      </h1>
      <nav class="float-r h50">
        <ul class="mp0 cf">
          <li @mouseenter="setMenu_on($event);" @mouseleave="setMenu_off($event);">
            <strong class="h50 inline-block">도서관정보</strong>
            <ul class="mp0 relative top10 none">
              <li><span>도서관소개</span></li>
              <li><span>이용안내</span></li>
              <li><span>오시는길</span></li>
            </ul>
          </li>
          <li @mouseenter="setMenu_on($event);" @mouseleave="setMenu_off($event);">
            <strong strong class="h50 inline-block">도서관련</strong>
            <ul class="mp0 relative top10 none">
              <li><span>도서검색</span></li>
              <li><span>도서신청</span></li>
              <li><span>신간도서</span></li>
            </ul>
          </li>
          <li @mouseenter="setMenu_on($event);" @mouseleave="setMenu_off($event);">
            <strong strong class="h50 inline-block">열린마당</strong>
            <ul class="mp0 relative top10 none">
              <li><router-link :to="{path: '/noticeList', query: {page: 1}}"><span>공지사항</span></router-link></li>
              <li><span>건의사항</span></li>
              <li><span>도서관 활동</span></li>
            </ul>
          </li>
          <li @mouseenter="setMenu_on($event);" @mouseleave="setMenu_off($event);">
            <strong strong class="h50 inline-block">나눔터</strong>
            <ul class="mp0 relative top10 none">
              <li><span>물품나눔</span></li>
              <li><span>재능나눔</span></li>
            </ul>
          </li>
          <li>
            <strong strong class="h50 inline-block" @click="goToLibMng">도서관관리</strong>
          </li>
        </ul>
      </nav>
    </div>
    <div ref="menuBg" class="absolute bottom-150 w100p h151 bg-fff none" style="background:linear-gradient(to top, #0000001a 1px, #fff 0);"></div>
  </header>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    setMenu_on(target) {
      const ul = target.target.closest('ul');
      const uls = ul.querySelectorAll(':scope ul');
      uls.forEach((el) => {el.classList.remove('none');});
      this.$refs.menuBg.classList.remove('none');
    },
    setMenu_off(target) {
      const ul = target.target.closest('ul');
      const uls = ul.querySelectorAll(':scope ul');
      uls.forEach((el) => {el.classList.add('none');});
      this.$refs.menuBg.classList.add('none');
    },
    goToLibMng(target){
      const t = this;
      if(false){ //로그인 + 관리자 권한
        alert();
        return;
      }
      t.$router.push({ name: 'libMng'})
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul{list-style:none;}
  nav > ul > li{float:left; width:100px; line-height:50px; cursor:pointer; text-align:center;}
  nav li li:hover span{background:#74bb2a; color:#fff; font-weight:900; transition:all .5s;}
  /* .bottom-line:after{content:''; display:block; position:absolute; bottom:0; left:0; width:100%; height:1px; background:#0000001a;} */
  a{color:#000; text-decoration:none;}
</style>

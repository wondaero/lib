<template>
  <!-- <div id="app" class="w100p mx-w1200 mg0auto h100p bg-000" :style="{background: `url(${img.bg}) no-repeat 50% 100%`}"> -->
  <div id="app" class="w100p mx-w1200 mg0auto relative" style="box-shadow:0 0 5px #00000080;">
    <Header />
    <!-- <Main /> -->
    <div class="pd-t100 border-box">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Main from './components/Main.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

// import bg from './assets/img/lib_bg.png'



export default {
  name: 'App',
  components: {
    Main,
    Header,
    Footer,
  },
  data: () => {
    return {
      img: {
        // bg: bg
      },
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=East+Sea+Dokdo&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap');

html, body{width:100%; background:linear-gradient(to bottom, transparent, transparent, #a8d551); background-attachment:fixed;}

.font-fam1{font-family: 'East Sea Dokdo', cursive;}
.font-fam2{font-family: 'Roboto Mono', monospace;}

[required]:before{content:'*'; color:#f00;}
[contenteditable="false"]{background:#fafafa;}

/* html, body {
    width: 100%;
    height: 100%;
    background: linear-gradient(175deg, transparent 500px, #a8d551 0);
} */

/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */

</style>

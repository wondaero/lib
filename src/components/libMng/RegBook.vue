<template>
  <div class="h100p cf border-box">
    <section class="h100p float-l pd-r10 border-box" style="border-right:1px solid #0000004d;">
      <div>
        <div class="mg-b5">
          <label>
            <h3 class="mp0 mg-b5 font12">ISBN</h3>
            <input type="text" class="w300 h40 border-box v-top border-aaa pd10">
          </label>
          <button class="outline0 border0 h40 line-h40px w120 v-top color-fff" style="background:#74bb2a;">도서검색</button>
        </div>
        <div class="mg-b5">
          <label>
            <h3 class="mp0 mg-b5 font12">총서명</h3>
            <input type="text" class="w420 h40 border-box v-top border-aaa pd10">
          </label>
        </div>
        <div class="mg-b5">
          <label>
            <h3 class="mp0 mg-b5 font12" required>서명</h3>
            <input type="text" class="w420 h40 border-box v-top border-aaa pd10">
          </label>
        </div>
        <div class="mg-b5 cf">
          <label class="float-l">
            <h3 class="mp0 mg-b5 font12">서명권차</h3>
            <input type="text" class="mg-r5 w130 h40 border-box v-top border-aaa pd10">
          </label>
          <label class="float-l">
            <h3 class="mp0 mg-b5 font12" required>저자</h3>
            <input type="text" class="w285 h40 border-box v-top border-aaa pd10">
          </label>
        </div>
        <div class="mg-b5 cf">
          <label class="float-l">
            <h3 class="mp0 mg-b5 font12">출판년도</h3>
            <input type="text" class="mg-r5 w130 h40 border-box v-top border-aaa pd10">
          </label>
          <label class="float-l">
            <h3 class="mp0 mg-b5 font12">출판사</h3>
            <input type="text" class="w285 h40 border-box v-top border-aaa pd10">
          </label>
        </div>
        <div class="mg-b5">
          <label>
            <h3 class="mp0 mg-b5 font12">딸림자료</h3>
            <input type="text" class="w420 h40 border-box v-top border-aaa pd10">
          </label>
        </div>
        <div class="mg-b5">
          <label>
            <h3 class="mp0 mg-b5 font12">도서상태</h3>
            <select type="text" class="w420 h40 border-box v-top border-aaa"></select>
          </label>
        </div>
        <div class="mg-b5 cf">
          <label class="float-l">
            <h3 class="mp0 mg-b5 font12">별치기호</h3>
            <input type="text" class="mg-r5 w130 h40 border-box v-top border-aaa pd10">
          </label>
          <label class="float-l">
            <h3 class="mp0 mg-b5 font12" required>분류기호</h3>
            <input type="text" class="w165 h40 border-box v-top border-aaa pd10">
            <button class="outline0 border0 h40 line-h40px w120 v-top color-fff" style="background:#74bb2a;">검색</button>
          </label>
        </div>
        <div class="mg-b5 cf">
          <label class="float-l">
            <h3 class="mp0 mg-b5 font12">청구권차</h3>
            <input type="text" class="mg-r5 w130 h40 border-box v-top border-aaa pd10">
          </label>
          <label class="float-l">
            <h3 class="mp0 mg-b5 font12" required>저자기호</h3>
            <input type="text" class="w165 h40 border-box v-top border-aaa pd10">
            <button class="outline0 border0 h40 line-h40px w120 v-top color-fff" style="background:#74bb2a;">검색</button>
          </label>
        </div>
        <div class="mg-b5 cf">
          <label class="float-l">
            <h3 class="mp0 mg-b5 font12">복본</h3>
            <input type="text" class="mg-r5 w130 h40 border-box v-top border-aaa pd10">
          </label>
          <label class="float-l">
            <h3 class="mp0 mg-b5 font12" required>등록번호</h3>
            <input type="text" class="w285 h40 border-box v-top border-aaa pd10">
          </label>
        </div>
      </div>
      <div style="border-top:1px dashed #aaa" class="mg-v10"></div>
      <div class="txt-r">
        <button class="outline0 border0 h40 line-h40px w120 v-top color-fff mg-r5" style="background:#74bb2a;"><strong>등록</strong></button>
        <button class="outline0 border0 h40 line-h40px w120 v-top color-fff" style="background:#dfdf00"><strong>초기화</strong></button>
      </div>
    </section>
    <section class="float-r pd-l10 border-box h100p" style="width:calc(100% - 431px);">
      <header class="cf">
        <div class="float-l">
          <input type="checkbox" class="w30 h30 mg-r5 v-middle" name="booksWithoutAuthorCde" @change="chkAllAuthorCde"/>
          <button class="outline0 border0 h40 line-h40px w120 v-top v-middle color-fff mg-r5" style="background:#74bb2a;"><strong>출력</strong></button>
          <button class="outline0 border0 h40 line-h40px w120 v-top v-middle color-fff bg-red"><strong>삭제</strong></button>
        </div>
        <div class="float-r h40 line-h40px">
          <strong>3건</strong>
        </div>
      </header>
      <div style="border-top:1px dashed #aaa" class="mg-t5"></div>
      <ul class="list-style-none mp0 overflow-y-auto" style="height:calc(100% - 61px);">
        <li class="border-b-ccc pd5">
          <input type="checkbox" class="w30 h30 v-middle mg-r5 pointer" name="bookWithoutAuthorCde" @change="chkAuthorCde" />
          <div class="inline-block border-box radius10 border-aaa font14 pd10 line-h1_5 v-middle txt-c mg-r5">
            <div>700.2343</div>
            <div>가233김</div>
            <div>EM00004550</div>
          </div>
          <div class="inline-block v-middle" style="width:calc(100% - 155px);">
            <span class="txt-overflow inline-block w100p">타이틀틀틀틀틀틀틀틀틀틀틀틀틀틀틀틀틀틀틀틀틀틀틀틀틀틀틀틀틀틀틀틀틀틀틀틀틀틀틀틀틀틀틀틀틀틀틀틀틀틀틀틀틀틀틀틀틀틀틀틀틀틀틀틀</span>
            <span class="txt-overflow inline-block w100p">저자자자자자자자자자자자자자자자자자자자자</span>
            <strong>2021-12-23 13:57:17</strong>
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
  },
  data: () => {
    return {
    }
  },
  mounted () {
    const t = this;
  },
  created () {
  },
  methods: {
    chkAuthorCde() {
      let isAllChk = true;
      const bookList = document.querySelectorAll('[name="bookWithoutAuthorCde"]');
      const allChk = document.querySelector('[name="booksWithoutAuthorCde"]');
      bookList.forEach((el) => {
        if(!el.checked){
          isAllChk = false;
          return false;
        }
      });

      allChk.checked = isAllChk;
    },

    chkAllAuthorCde() {
      const allChk = document.querySelector('[name="booksWithoutAuthorCde"]');
      const bookList = document.querySelectorAll('[name="bookWithoutAuthorCde"]');
      bookList.forEach((el) => {el.checked = allChk.checked;});

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

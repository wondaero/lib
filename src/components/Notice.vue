<template>
  <div class="pd50 bg-fff">
    <h1>공지사항</h1>
    <div class="mg-b20 cf">
      <div class="float-r line-h50px font16">
        <strong class="pointer">리스트</strong>
        <span v-if="$route.query.type != 'view'">
          <strong class="mg-l10 pointer" @click="regBoard">등록</strong>
          <span v-if="$route.query.type != 'write'">
            <strong class="mg-l10 pointer">수정</strong>
            <strong class="mg-l10 pointer">삭제</strong>
          </span>
        </span>
      </div>
    </div>
    <div class="border-b-dashed-ccc mg-v20"></div>
    <section>
      <article>
        <div class="mg-b10">
          <h3 class="mp0 mg-b10" required>제목</h3>
          <input type="text" ref="title" class="h50 border-box border-aaa pd10 block w100p" placeholder="제목">
        </div>
        <div>
          <div class="cf">
            <h3 class="mp0 mg-b10 float-l" required>내용</h3>
          </div>
          <div ref="content" class="pd10 border-aaa relative border-box overflow-y-auto h500 mg-b10" :contenteditable="contentOpt"></div>
          <div>
            <div class="cf mg-b10">
              <h3 class="mp0 float-l">첨부파일{{files.length ? '(' + files.length + ')' : ''}}</h3>
              <label class="float-r">
                  <input type="file" multiple="multiple" ref="files" @change="setImgs" class="none" />
                  <strong class="pd5 inline-block pointer">이미지 추가</strong>
              </label>
            </div>
            <div class="">
              <ul ref="fileList" class="list-style-none mp0 overflow-x-auto nowrap"></ul>
            </div>
          </div>
        </div>
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
      files: [],
      contentOpt: true,
    }
  },
  mounted () {
    const t = this;
  },
  created () {
    const t = this;
    if(t.$route.query.seq && t.$route.query.type == 'view'){
      t.contentOpt =  false;
      alert();
    }
  },
  methods: {
    setImgs(e) {
      const t = this;
      while ( t.$refs.fileList.hasChildNodes() ) { t.$refs.fileList.removeChild( t.$refs.fileList.firstChild ); }
      let files = e.target.files;
      // let fileArr = Array.from(files);
      let fileArr = Array.prototype.slice.call(files);

      let initFileCnt = t.files.length;

      fileArr.forEach((f) => {
        if(!f.type.match("image.*")){
          alert('이미지 확장자만 가능합니다.');
          return;
        }
        t.files.push(f);
      });
      
      t.files.forEach(function(f, idx){
        let reader = new FileReader();
        reader.onload = function(e){
          let li = document.createElement("li");
          li.classList.add('inline-block', 'v-top', 'mg-r10', 'relative');
          li.setAttribute('data-file-idx', idx);
          
          let btn_remove = document.createElement("div");
          btn_remove.classList.add('pd10', 'absolute', 'top0', 'right0', 'bg-000-0_5', 'color-fff', 'pointer', 'font-w900');
          btn_remove.innerHTML = 'X';

          let img = document.createElement("img");
          img.setAttribute("src", e.target.result);
          img.classList.add('w300');

          li.appendChild(img);
          li.appendChild(btn_remove);
          t.$refs.fileList.appendChild(li);

          btn_remove.addEventListener('click', (e)=> {
            const targetLi = e.target.closest('li');
            const targetIdx = targetLi.getAttribute('data-file-idx');
            targetLi.remove();
            t.files.splice(targetIdx, 1);
          })
        }

        reader.readAsDataURL(t.files[idx]);
      })
    },

    regBoard() {
      const t = this;
      if(!t.chkValidation()){
        alert('필수항목을 입력해주세요.');
        return;
      }

      const dataTranster = new DataTransfer();
      t.files.forEach((f) => {
        dataTranster.items.add(f);
      })

      t.$refs.files.files = dataTranster.files;

      const params = {
        title: t.$refs.title.value,
        content: t.$refs.content.innerHTML,
        files: t.$refs.files.files
      }

      t.$axios.get('https://nl.go.kr/kolisnet/openApi/open.php?gubun1=ISBN&code1=8958342102').then((res) => {
        console.log(res);

      })

      //ajax태워주면 끝
    },

    chkValidation() {
      const t = this;
      let isValid = true;
      const title = t.$refs.title.value;
      const content = t.$refs.content.innerHTML;
      if(title == '' || content == ''){
        isValid =  false;
      }

      return isValid;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  a{color:#000; text-decoration:none;}
</style>

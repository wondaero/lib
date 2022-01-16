import Vue from 'vue'
import Router from 'vue-router'

import main from "@/components/Main.vue"
import noticeList from "@/components/NoticeList.vue"
import notice from "@/components/Notice.vue"
import libMng from "@/components/LibMng.vue"

Vue.use(Router);

export default new Router({
  mode: 'history', // history 모드는 자연스러운 url 가능, 지정하지 않으면 해시(#)기호로 url 사용
  routes: [
      {
          path: "/", // 경로
          name: "main", // 해당 경로의 이름 
          component: main // 이동할 컴포넌트
      },
      {
          path: "/noticeList", // 경로
          name: "noticeList", // 해당 경로의 이름 
          component: noticeList // 이동할 컴포넌트
      },
      {
          path: "/notice", // 경로
          name: "notice", // 해당 경로의 이름 
          component: notice // 이동할 컴포넌트
      },
      {
          path: "libMng", // 경로
          name: "libMng", // 해당 경로의 이름 
          component: libMng // 이동할 컴포넌트
      },
  ]
})
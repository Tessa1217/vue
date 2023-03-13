import { createWebHistory, createRouter } from "vue-router";
import store from "@/stores/store.js";

const routes = [
  {
    // 메인 페이지
    path: "/",
    component: () => import("@/components/base/MainHome"),
    name: "MainHome",
  },
  {
    // 로그인 페이지
    path: "/users/login",
    component: () => import("@/components/users/LoginComponent"),
    name: "LoginComponent",
  },
  {
    // 회원가입 페이지
    path: "/users/signup",
    component: () => import("@/components/users/SignUpComponent"),
    name: "SignUpComponent",
  },
  {
    path: "/board",
    component: () => import("@/components/board/BoardComponent"),
    meta: { authRequired: true },
    children: [
      {
        // 게시판 목록 조회
        path: "list",
        component: () => import("@/components/board/BoardList"),
        name: "BoardList",
      },
      {
        // 게시판 상세조회
        path: "detail/:id",
        component: () => import("@/components/board/BoardDetail"),
        name: "BoardDetail",
      },
      {
        // 게시판 등록/수정
        path: "insert",
        component: () => import("@/components/board/BoardWrite"),
        name: "BoardInsert",
      },
      {
        path: "update/:id",
        component: () => import("@/components/board/BoardWrite"),
        name: "BoardUpdate",
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "link-active",
});

router.beforeEach((to) => {
  if (to.meta.authRequired) {
    const isLogin = store.getters["UserStore/isLoggedIn"];
    if (!isLogin) {
      return { name: "LoginComponent" };
    } else {
      store.dispatch("UserStore/setHeaders");
    }
  }
});

export default router;

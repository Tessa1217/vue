import { createWebHistory, createRouter } from "vue-router";

const routes = [
  {
    // 메인 페이지
    path: "/",
    component: () => import("@/components/MainHome"),
    name: "MainHome",
  },
  {
    // 로그인 페이지
    path: "/login",
    component: () => import("@/components/auth/LoginComponent"),
    name: "LoginComponent",
  },
  {
    // 게시판 목록 조회
    path: "/board",
    component: () => import("@/components/board/BoardList"),
    name: "BoardList",
  },
  {
    // 게시판 등록/수정
    path: "/board/insert",
    component: () => import("@/components/board/BoardWrite"),
    name: "BoardInsert",
  },
  {
    path: "/board/update/:id",
    component: () => import("@/components/board/BoardWrite"),
    name: "BoardUpdate",
  },
  {
    // 게시판 상세조회
    path: "/board/detail/:id",
    component: () => import("@/components/board/BoardDetail"),
    name: "BoardDetail",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: "link-active",
});

export default router;

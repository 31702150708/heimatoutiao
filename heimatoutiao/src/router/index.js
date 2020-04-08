import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

// 路由配置
const routes = [
  {
    path: "/",
    component: () => import("@/views/Index")
  },
  {
    // 登录页
    path: "/login",
    // 除了首页之外的页面都可以用懒加载,@符号代表的src这个目录
    // .vue这个扩展名可以忽略
    component: () => import("@/views/Login")
  },
  {
    // 注册页
    path: "/register",
    component: () => import("@/views/Register")
  },
  {
    // 个人中心页
    path: "/personal",
    component: () => import("@/views/Personal"),
    // 路由可以通过meta自定义数据
    meta: {
      // 代表这个页面需要授权
      authorization: true
    }
  },
  {
    // 编辑页
    path: "/editProfile",
    component: () => import("@/views/EditProfile"),
    // 路由可以通过meta自定义数据
    meta: {
      // 代表这个页面需要授权
      authorization: true
    }
  },
  {
    // 跟帖页
    path: "/comment",
    component: () => import("@/views/Comment"),
    // 路由可以通过meta自定义数据
    meta: {
      // 代表这个页面需要授权
      authorization: true
    }
  },
  {
    // 关注页
    path: "/follow",
    component: () => import("@/views/Follow"),
    // 路由可以通过meta自定义数据
    meta: {
      // 代表这个页面需要授权
      authorization: true
    }
  },
  {
    // 收藏页
    path: "/star",
    component: () => import("@/views/Star"),
    // 路由可以通过meta自定义数据
    meta: {
      // 代表这个页面需要授权
      authorization: true
    }
  },
  {
    // 栏目管理页
    path: "/category",
    component: () => import("@/views/Category")
  },
  {
    // 栏目管理页
    path: "/search",
    component: () => import("@/views/Search")
  },
  {
    // 文章详情页
    path: "/post/:id",
    component: () => import("@/views/Post")
  },
  {
    // 视频文章详情页
    path: "/video/:id",
    component: () => import("@/views/Video")
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

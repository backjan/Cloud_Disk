import Vue from 'vue'
import VueRouter from 'vue-router'
const slide = () =>
    import ('../views/slide/slide')
const personalFile = () =>
    import ('../views/file/personalFile')
const login = () =>
    import ('../views/login/login.vue')
const user = () =>
    import ('../views/user/user')
const account = () =>
    import ('../views/account/account')
const loginRebackPsw = ()=>
    import ('../views/login/loginRebackPsw.vue')
const loginEdRebackPsw = ()=>
    import ('../views/login/logiinEdRebackPsw.vue')
Vue.use(VueRouter)

const routes = [{
        path: '',
        redirect: '/login' //默认路由
    },
    {
        path: '/login',
        component: login //登录界面路由
    },
    {
        path: '/rbPsw',
        component: loginRebackPsw //登录界面找回密码路由
    },
    {
        path: '/loginEdRebackPsw',
        component: loginEdRebackPsw
    },
    {
        path: '/slide',
        component: slide, //主页左侧边栏路由
        children: [{
                path: '',
                redirect: 'user' //默认子路由
            },
            {
                path: 'user',
                component: user //主页用户界面路由
            },
            {
                path: 'personal',
                component: personalFile //主页个人文件路由
            },
            {
                path: 'account',
                component: account
            }
        ]
    }
]

const router = new VueRouter({
    mode: 'history', //url参数传递方式
    base: process.env.BASE_URL,
    routes
})

export default router
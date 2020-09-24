import Vue from 'vue'
import VueRouter from 'vue-router'
const slide = () =>
    import ('../views/slide/slide')
const personalFile = () =>
    import ('../views/file/personalFile')
const login = () =>
<<<<<<< HEAD
    import ('../views/login/login.vue')
=======
<<<<<<< HEAD
    import ('../views/login/login.vue')
=======
    import ('../components/login/login')
>>>>>>> 0408787... xty2.0
>>>>>>> 2cae486... xty2.0
const user = () =>
    import ('../views/user/user')
const account = () =>
    import ('../views/account/account')
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 2cae486... xty2.0
const loginRebackPsw = ()=>
    import ('../views/login/loginRebackPsw.vue')
const loginEdRebackPsw = ()=>
    import ('../views/login/logiinEdRebackPsw.vue')
<<<<<<< HEAD
=======
=======

>>>>>>> 0408787... xty2.0
>>>>>>> 2cae486... xty2.0
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 2cae486... xty2.0
        path: '/rbPsw',
        component: loginRebackPsw //登录界面找回密码路由
    },
    {
        path: '/loginEdRebackPsw',
        component: loginEdRebackPsw
    },
    {
<<<<<<< HEAD
=======
=======
>>>>>>> 0408787... xty2.0
>>>>>>> 2cae486... xty2.0
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
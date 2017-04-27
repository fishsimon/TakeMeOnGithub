/**
 * Created by Administrator on 2017/4/26.
 */


var homeComponent = {template:'<div>主页</div>'};
var home2Component = {template:'<div>2页</div>'};
var home3Component = {template:'<div>3页</div>'};
var profileComponent = {template:'<div>用户信息</div>'};
var routes = [
    {path:'/',component:homeComponent},
    {path:'/home',component:homeComponent},
    {path:'/router2',component:home2Component},
    {path:'/router3',component:home3Component},
    {path:'/profile',component:profileComponent}
];
var router = new VueRouter({
    routes:routes
});
var app = new Vue({
   router:router
}).$mount('#app');
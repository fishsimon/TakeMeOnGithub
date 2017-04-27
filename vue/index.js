/**
 * Created by lenovo on 2017/4/25.
 */
var app = new Vue({
    el:'#app',
    data:{
        message:"hellow vue"
    }
});
var app2 = new Vue({
    el:'#app2',
    data:{
        message:'页面加载于'+new Date()
    }
});
var app3 = new Vue({
    el:'#app3',
    data:{
        seen:true
    }
});
var toggleFade = new Vue({
    el:'#toggleFade',
    data:{
        show:true
    }
});
var app4 = new Vue({
    el:'#app4',
    data:{
        todos:[
            {text:'学习Javascript'},
            {text:'学习Vue'},
            {text:'学习牛项目'}
        ]
    }
});
var app5 = new Vue({
    el:'#app5',
    data:{
        message:'hellow vue.js!'
    },
    methods:{
        reverseMessage:function () {
            this.message = this.message.split('').reverse().join('');
        }
    }
});
var app6 = new Vue({
    el:'#app6',
    data:{
        message:"hellow 你好！"
    }
});
var app7 = new Vue({
    el:'#app7',
    data:{
        groceryList:[
            {text:"蔬菜"},
            {text:"milk"},
            {text:"水果"}

        ]
    }
});
Vue.component('todo-item',{
    //通过props接收外界传入（可以用v-bind）的属性
    props:['todo'],
    template:'<li>{{todo.text}}</li>'
});

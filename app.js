new Vue({
    el:"#app",

    data:{
        show:`<h3>Hello</h3>`,
        text:"ali rahjo",
        dark:"",
    },

    methods: {
        change:function () {
            this.text="Ali Rahjo";
        }
    },
});
new Vue({
    el:"#app",
    data:{
        counter:0,
        name:"Vue",
        family:"js"
    },

    methods: {
        plusCounter:function () {
            this.counter += 1;
        }
    },
});
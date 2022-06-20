new Vue({
    el:"#app",

    data:{
        tx:"text",
        ps:"password",
    },

    methods: {
        handel:function () {
           if (this.ps == "password") {
               this.ps="text";
           }else{
               this.ps="password";
           }
        }  
    },

});
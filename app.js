new Vue({
    el:"#app",
    data:{
        cont:0,
        text_box:'',
        cx:0,
    },

    methods: {
        plusCont:function () {
            this.cont += 1;
        },
        negativeCont:function () {
           if (this.cont <= 0) {
               this.cont = 0;
               alert(`the conter is => ${this.cont}`);
               return false;
           } else {
                this.cont -=1;
           }
        },

        // event key 
        showValue:function (e) {
            this.text_box = e.target.value;
        },

        showClientx:function (e) {
            this.cx = e.clientX;
        }
    }
});
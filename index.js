new Vue({
    el: "#root",
    data: {
        attachRed: false
    },
    computed: {
        divClasses: {
            red: this.attachRed,
            blue: !this.attachRed
        }
    }
});

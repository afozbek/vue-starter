new Vue({
    el: "#root",
    data: {
        attachRed: false,
        color: "green"
    },
    computed: {
        divClasses: function() {
            return {
                red: this.attacRed,
                blue: !this.attachRed
            };
        }
    }
});

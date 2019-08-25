new Vue({
    el: "#root",
    data: {
        color: "gray",
        width: 150
    },
    computed: {
        myStyle: function() {
            return {
                backgroundColor: this.color,
                width: this.width + "px"
            };
        }
    }
});

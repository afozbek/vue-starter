new Vue({
    el: "#root",
    data: {
        counter: 0,
        x: 0,
        y: 0
    },
    methods: {
        incrementCounter: function() {
            return ++this.counter;
        },
        updateCoordinates: function(e) {
            this.x = e.clientX;
            this.y = e.clientY;
        }
    }
});

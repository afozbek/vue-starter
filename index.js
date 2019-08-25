new Vue({
    el: "#root",
    data: {
        counter: 0
    },
    methods: {
        incrementCounter: function() {
            return ++this.counter;
        }
    }
});

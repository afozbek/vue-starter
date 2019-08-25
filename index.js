new Vue({
    el: "#root",
    data: {
        title: "Hello World 👨🏻",
        link: "https://google.com"
    },
    methods: {
        sayHello: function() {
            return this.title;
        }
    }
});

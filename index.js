new Vue({
    el: "#root",
    data: {
        name: "Furkan"
    },
    computed: {},
    watch: {
        name: function(name) {
            var vm = this;

            setTimeout(function() {
                vm.name = "Hello World 👩🏻";
            }, 2000);
        }
    }
});

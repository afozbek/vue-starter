new Vue({
    el: "#exercise",
    data: {
        person: {
            name: "Furkan",
            age: 23
        },
        imageUrl:
            "https://secure.img2-fg.wfcdn.com/im/02238154/compr-r85/8470/84707680/pokemon-pikachu-wall-decal.jpg"
    },
    methods: {
        getRandom: function() {
            return Math.random();
        }
    }
});

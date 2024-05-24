const app = Vue.createApp({
    data() {
        return {
            name: 'NGUYEN THI BINH AN',
            age: 30,
            imageUrl: 'my-painting.jpg'
        };
    },
    methods: {
        caculateAge() {
            return this.age + 5;
        },
        randomNum() {
            return Math.random();
        }
    }
});

app.mount('#assignment');
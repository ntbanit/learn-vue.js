const app = Vue.createApp({
  data() {
    return {
      result: 0,
    };
  },
  watch: {
    result(value) {
      if (this.result < 37) {
        return;
      }
      const that = this;
      setTimeout(function () {
        that.result = 0;
      }, 5000);
    },
  },
  computed: {
    resultText() {
      if (this.result < 37) {
        return "Not there yet";
      } else if (this.result === 37) {
        return this.result;
      } else {
        return "Too much!";
      }
    },
  },
  methods: {
    add(number) {
      this.result += number;
    },
  },
});
app.mount("#assignment");


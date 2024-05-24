const app = Vue.createApp({
  data() {
    return {
      name: "NGUYEN THI BINH AN",
      outputData: "OUTPUT DATA HERE",
      enteredData: "ENTERED DATA HERE",
    };
  },
  methods: {
    showAlert() {
      alert("Hello, Vue.js! by " + this.name);
    },
    showOutput(event) {
      this.outputData = event.target.value;
    },
    showOutputEnter(event) {
      this.enteredData = event.target.value;
    },
  },
});
app.mount("#assignment");

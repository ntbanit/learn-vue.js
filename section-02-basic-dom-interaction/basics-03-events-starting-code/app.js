const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      title: "Developer",
      confirmTitle: "",
    };
  },
  computed: {
    fullTitle() {
      console.log("Running again...");
      if (this.title === "") {
        return "";
      }
      return "NGUYEN THI BINH AN "+ this.title;
    },
  },
  watch:{
    
  },
  methods: {
    add(number) {
      this.counter += number;
    },
    reduce(number) {
      this.counter -= number;
    },
    updateTitle(event) {
      this.title = event.target.value;
    },
    submitForm() {
      alert("Submitted!");
    },
    confirmInput() {
      this.confirmTitle = this.title;
    },
    resetInput() {
      this.title = "";
    },
  },
});

app.mount("#events");

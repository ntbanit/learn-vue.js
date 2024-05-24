const app = Vue.createApp({
  data() {
    return {
      styling: "",
      toogled: true,
      inlineColor: "blue",
    };
  },
  computed: {
    getStyling() {
      const className = this.toogled ? "visible" : "hidden";
      return this.styling + " " + className;
    },
  },
  methods: {
    changeStyle(event) {
      const input = event.target.value;
      if (input !== "user1" && input !== "user2") {
        alert("Please enter user1 or user2");
        return;
      }
      this.styling = input;
      event.target.value = "";
    },
    toogle() {
      this.toogled = !this.toogled;
    },
    changeBackgroundColor(event) {
      this.inlineColor = event.target.value;
    }
  },
});
app.mount("#assignment");

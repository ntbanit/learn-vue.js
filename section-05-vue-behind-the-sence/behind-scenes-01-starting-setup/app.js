const app = Vue.createApp({
  data() {
    return {
      // currentUserInput: '',
      message: "Vue is great!",
    };
  },
  methods: {
    // saveInput(event) {
    /*** this.$refs.userText is the event.target */
    //   this.currentUserInput = event.target.value;
    // },
    setText() {
      // this.message = this.currentUserInput;

      /*** this.$refs.userText is the input */
      this.message = this.$refs.userText.value;
    },
  },
  beforeCreate() {
    console.log("beforeCreate()");
  },
  created() {
    console.log("created()");
  },
  beforeMount() {
    console.log("beforeMount()");
  },
  mounted() {
    console.log("mounted()");
  },
  beforeUpdate() {
    console.log("beforeUpdate()");
  },
  updated() {
    console.log("updated()");
  },
  beforeUnmount() {
    console.log("beforeUnmount()");
  },
  unmounted() {
    console.log("unmounted()");
  },
});

app.mount("#app");

setTimeout(function () {
  app.unmount();
}, 10000);

const app2 = Vue.createApp({
  template: `
    <p>{{ favoriteMeal }}</p>
  `,
  data() {
    return {
      favoriteMeal: "Bread!",
    };
  },
});
app2.mount("#app2");

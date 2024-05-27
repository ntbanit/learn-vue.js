const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "01234 5678 991",
          email: "manuel@localhost.com",
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "09876 543 221",
          email: "julie@localhost.com",
        },
      ],
      toogle: new Map(),
    };
  },
  methods: {
    toogleDetails(id) {
        // console.log(id);
        this.toogle.set(id, !this.toogle.get(id));
    },
  },
  beforeMount() {
    for (const friend of this.friends) {
      this.toogle.set(friend.id, false);
    }
  },
  // mounted() {
  //   console.log(this.toogle);
  // },
});
app.mount("#app");

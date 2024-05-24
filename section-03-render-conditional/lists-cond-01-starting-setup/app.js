const app = Vue.createApp({
  data() {
    return {
      enteredValue: "",
      goals: [],
    };
  },
  methods: {
    addGoal() {
      if (this.enteredValue === "" || this.goals.includes(this.enteredValue)) {
        alert("Please enter another goal");
        return;
      } 
      this.goals.push(this.enteredValue);
      this.enteredValue = "";
    },
    removeGoal(index) {
      this.goals.splice(index, 1);
    }
  },
});

app.mount("#user-goals");

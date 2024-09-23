<template>
  <li>
    <h2>{{ friend.name }} 
      {{ friend.favorited ? '(Favorited)' : '' }}
    </h2>
    <button @click="toogleDetails()">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <button @click="toogleFavorite()">
      Toogle Favorite
    </button>
    <button @click="$emit('delete', this.friend.id)"> Delete</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    friend : {
      type: Object,
      required: true
    }
  },
  emits: ['toogle-favorite', 'delete'],
  data() {
    return {
      detailsAreVisible: false
    };
  },
  methods: {
    toogleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toogleFavorite(){
      this.$emit('toogle-favorite', this.friend.id);
    }
  },
  mounted(){
    // console.log(this.friend)
  }
};
</script>
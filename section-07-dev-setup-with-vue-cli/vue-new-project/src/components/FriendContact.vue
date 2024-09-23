<template>
  <li>
    <h2>{{ fullname }} 
      {{ isFavorite ? '(Favorited)' : '' }}
    </h2>
    <button @click="toogleDetails()">
      {{ detailsAreVisible ? "Hide" : "Show" }} Details
    </button>
    <button @click="toogleFavorite()">
      Toogle Favorite
    </button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ phoneContact }}</li>
      <li><strong>Email:</strong> {{ emailPrivate }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  props: {
    id : {
      type: String,
      required: true
    },
    fullname : {
      type: String,
      required: false
    },
    phoneContact : {
      type: String,
      required: false
    },
    emailPrivate : {
      type: String,
      required: false
    },
    isFavorite : {
      type: Boolean,
      required: false,
      default: false
    },
  },
  emits: ['toogle-favorite'],
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
      this.$emit('toogle-favorite', this.id);
    }
  },
};
</script>
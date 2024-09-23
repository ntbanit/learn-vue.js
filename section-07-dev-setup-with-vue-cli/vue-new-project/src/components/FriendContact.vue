<template>
  <li>
    <h2>{{ fullname }} 
      {{ isFavoriteFriend ? '(Favorited)' : '' }}
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
  data() {
    return {
      detailsAreVisible: false,
      isFavoriteFriend : this.isFavorite
    };
  },
  methods: {
    toogleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toogleFavorite(){
      this.isFavoriteFriend = !this.isFavoriteFriend;
    }
  },
};
</script>
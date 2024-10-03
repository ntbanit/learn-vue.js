<template>
    <TheHeader title="Remember Me"></TheHeader>
    <TheResources></TheResources>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';
import TheResources from './components/learning-resources/TheResources.vue';
export default {
    components: {
        TheHeader,
        TheResources: TheResources
    },
    data() {
        return {
            
        };
    },
    mounted() {
        // console.log(this.storedResources);
    },
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");

* {
    box-sizing: border-box;
}

html {
    font-family: 'Jost', sans-serif;
}

body {
    margin: 0;
}
</style>
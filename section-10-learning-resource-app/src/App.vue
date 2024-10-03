<template>
    <TheHeader title="Remember Me"></TheHeader>
    <StoredResources :resources="storedResources"></StoredResources>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';
import StoredResources from './components/learning-resources/StoredResources.vue';
export default {
    components: {
        TheHeader,
        StoredResources
    },
    data() {
        return {
            storedResources: [
                {
                    id: 'udemy',
                    title: 'LG CNS Udemy',
                    description: 'Learning Courses that provided by company',
                    link: 'https://lg-cns.udemy.com/'
                },
                {
                    id: 'youtube',
                    title: 'Youtube',
                    description: 'Online videos that share publicly',
                    link: 'https://www.youtube.com/'
                }
            ]
        };
    },
    mounted() {
        // console.log(this.storedResources);
    }

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
<template>
    <ul>
        <LearningResource v-for="res in resources" :key="res.id" :resource="res">
        </LearningResource>
    </ul>
</template>

<script>
import LearningResource from './LearningResource.vue';
export default {
    components: {
        LearningResource
    },
    inject: ['resources']

}
</script>

<style scoped>
ul {
    list-style: none;
    margin: 0;
    padding: 0;
    margin: auto;
    max-width: 40rem;
}
</style>
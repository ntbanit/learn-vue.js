<template>
    <ul>
        <li v-for="goal in goals" :key="goal">
            <slot :item="goal" another-prop="Fake data"></slot>
        </li>
    </ul>
</template>

<script>
export default {
    data() {
        return {
            goals: ['Learning Vue JS', 'Finish the course']
        }
    },
    mounted() {
        console.log(this.$slots.goal);
        console.log('Check');
    }
}
</script>
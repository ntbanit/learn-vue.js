<template>
    <h2>Manage Goals</h2>
    <input type="text" ref="goal" />
    <button @click="setGoal">Set Goal</button>
    <teleport to="body">
        <ErrorAlert v-if="!validInput">
            <h2>Invalid input!</h2>
            <p>Please enter something!</p>
            <button @click="closeAlert">Close</button>
        </ErrorAlert>
    </teleport>
</template>
<script>
import ErrorAlert from './ErrorAlert.vue';

export default {
    components: {
        ErrorAlert
    },
    data() {
        return {
            validInput: true
        }
    },
    methods: {
        setGoal() {
            if (!this.$refs.goal.value) {
                this.validInput = false;
            }
        },
        closeAlert() {
            this.validInput = true;
        }
    }
}
</script>
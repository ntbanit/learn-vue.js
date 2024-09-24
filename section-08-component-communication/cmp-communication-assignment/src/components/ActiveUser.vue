<template>
    <div>
        <ul>
            <li v-if="person.username && person.age">
                {{ person.username }} is {{ person.age }} years old.
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props : {
        person : {
            type: Object,
            required: true
        }
    },
    mounted(){
        console.log('mounted active-user');
    }
}
</script>

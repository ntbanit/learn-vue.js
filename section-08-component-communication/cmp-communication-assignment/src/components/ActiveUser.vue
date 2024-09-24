<template>
    <div>
        <ul>
            <li> Username: {{ person.username }}</li>
            <li> Age: {{ person.age }}</li>
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

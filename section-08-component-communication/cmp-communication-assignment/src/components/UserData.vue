<template>
    <form @submit.prevent="updateData">
        <div>
            <label>Username:</label>
            <input type="text" v-model="inputUsername"/>
        </div>
        <div>
            <label>Age:</label>
            <input type="number" v-model="inputAge"/>
        </div>
        <button type="submit">Update info</button>
    </form>
</template>

<script>
export default {
    emits :['update-data'],
    mounted(){
        console.log('mounted user-data');
    },
    data(){
        return {
            inputUsername : '',
            inputAge: ''
        }
    },
    methods : {
        updateData(){
            if(!this.inputUsername || !this.inputAge){
                alert('Please input value !');
                return;
            }
            const inputPerson = {
                username : this.inputUsername,
                age : this.inputAge
            };
            this.$emit('update-data', inputPerson);
            this.inputUsername = '';
            this.inputAge = '';
        }
    }
}
</script>

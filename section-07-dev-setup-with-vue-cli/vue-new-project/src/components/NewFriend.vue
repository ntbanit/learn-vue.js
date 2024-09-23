<template>
    <form @submit.prevent="addFriend">
        <div>
            <label>Name: </label>
            <input type="text" v-model="inputName"/>
        </div>
        <div>
            <label>Phone: </label>
            <input type="tel" v-model="inputPhone"/>
        </div>
        <div>
            <label>Email: </label>
            <input type="email" v-model="inputEmail"/>
        </div>
        <button>Add Friend</button>
    </form>
</template>

<script>
export default{
    emits : ['add-friend'],
    data() {
        return {
            inputName: '',
            inputPhone: '',
            inputEmail: ''
        }
    },
    methods : {
        addFriend(){
            this.$emit('add-friend', this.inputName, this.inputPhone, this.inputEmail)
        }
    }
}
</script>

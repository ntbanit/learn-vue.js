<template>
    <BaseDialog v-if="invalidInput" title="Invalid Input" @close="closeDialog">
        <template #default>
            <p>Something wrong!</p>
            <p>Please check your input again and make sure them not empty</p>
        </template>
        <!-- <template #actions>
            <BaseButton @click="closeDialog">Okey</BaseButton>
        </template> -->
    </BaseDialog>
    <BaseCard @submit.prevent="saveResource">
        <form>
            <div>
                <label>Title</label>
                <input v-model="inputResource.title" type="text" />
            </div>
            <div>
                <label>Description</label>
                <textarea v-model="inputResource.description" type="text" rows="3"></textarea>
            </div>
            <div>
                <label>Link</label>
                <input v-model="inputResource.link" type="url" />
            </div>
            <div>
                <BaseButton type="submit">Save Resource</BaseButton>
            </div>

        </form>
    </BaseCard>
</template>

<script>
export default {
    inject: ['addResource'],
    data() {
        return {
            inputResource: {
                id: '',
                title: '',
                description: '',
                link: ''
            },
            invalidInput : false
        }

    },
    methods: {
        saveResource() {
            if (this.inputResource.title.trim() === ''
                || this.inputResource.description.trim() === ''
                || this.inputResource.link.trim() === '') {
                this.invalidInput = true;
                return;
            }
            this.inputResource.id = new Date().toISOString();

            const newResource = { ...this.inputResource };
            this.addResource(newResource);

            Object.keys(this.inputResource).forEach(key => {
                this.inputResource[key] = '';
            });
        },
        closeDialog(){
            this.invalidInput = false;
        }
    },
    mounted(){
        // console.log('inputResource mounted');
    }
}
</script>

<style scoped>
div {
    margin: 1rem 0;
}

label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
}

input,
textarea {
    display: block;
    width: 100%;
    font: inherit;
    padding: 0.15rem;
    border: 1px solid #ccc;
}

input:focus,
textarea:focus {
    outline: none;
    border-color: #3a0061;
    background-color: #f7ebff;
}
</style>
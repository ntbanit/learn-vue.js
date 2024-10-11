<template>
    <BaseCard>
        <BaseButton @click="setTab('StoredResources')" :mode="storedBtnMode">Stored Resources</BaseButton>
        <BaseButton @click="setTab('InputResource')" :mode="inputBtnMode">Input Resource</BaseButton>
    </BaseCard>
    <KeepAlive>
        <component :is="selectedTab">
        </component>
    </KeepAlive>
</template>

<script>
import InputResource from './InputResource.vue';
import StoredResources from './StoredResources.vue';
export default {
    components: {
        InputResource,
        StoredResources
    },
    data() {
        return {
            selectedTab: 'StoredResources',
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
        }
    },
    provide() {
        return {
            resources: this.storedResources,
            addResource: this.addResource,
            deleteResource: this.deleteResource
        }
    },
    methods: {
        setTab(cmp) {
            this.selectedTab = cmp;
        },
        addResource(newResource) {
            console.log(newResource)

            this.storedResources.unshift(newResource);
            this.selectedTab = 'StoredResources';
        },
        deleteResource(idInput){
            let index = this.storedResources.findIndex(res => res.id === idInput);
            this.storedResources.splice(index, 1);
        }
    },
    computed: {
        storedBtnMode() {
            return this.selectedTab == 'StoredResources' ? null : 'flat';
        },
        inputBtnMode() {
            return this.selectedTab == 'StoredResources' ? 'flat' : null;
        }
    }
}
</script>

<style></style>
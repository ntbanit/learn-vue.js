<template>
    <li>
        <BaseCard>
            <header>
                <h3>{{ resource.title }}</h3>
                <BaseButton mode="flat" @click="deleteResource(resource.id)">Delete</BaseButton>
            </header>
            <p>{{ resource.description }}</p>
            <nav>
                <a :href="resource.link">View Resource</a>
            </nav>
        </BaseCard>
    </li>
</template>

<script>
export default {
    props: ['resource'],
    inject: ['deleteResource']
};
</script>

<style scoped>
li {
    margin: auto;
    max-width: 40rem;
}

header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

h3 {
    font-size: 1.25rem;
    margin: 0.5rem 0;
}

p {
    margin: 0.5rem 0;
}

a {
    text-decoration: none;
    color: purple;
}

a:hover,
a:active {
    color: #c89300;
}
</style>
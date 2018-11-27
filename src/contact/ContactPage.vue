<template>
    <div>
        <Navigation />
        <img class="header" src="./contact.png" alt="Contact"/>
        <Trees />
    </div>
</template>

<script>
import Navigation from '../navigation/Navigation.vue';
import Trees from '../trees/Trees.vue';

export default {
    name: 'Contact',
    components: {
        Navigation,
        Trees
    }
}
</script>

<style>
    .header {
        width: 75%;
        margin-top: 75px;
    }
</style>

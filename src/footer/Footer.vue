<template>
    <footer>
        <span>
            &copy; Emily Reno 2018
        </span>
        <Chat />
    </footer>
</template>

<script>
import Chat from '../chat/Chat.vue';

export default {
    name: 'Footer',
    components: {
        Chat
    },
}
</script>

<style>
    footer {
        display: flex;
        justify-content: space-between;
        position: fixed;
        background-color: rgb(218, 221, 219);
        width: 100%;
        padding: .5em;
        bottom: 0;
        left: 0;
        /* box-shadow: 5px 2px 20px rgba(0, 0, 0, .7); */
    }

    footer span {
        font-weight: 600;
        color: rgb(55, 75, 52);
    }
</style>

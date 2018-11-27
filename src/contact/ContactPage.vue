<template>
    <div>
        <Navigation />
        <img class="header" src="./contact.png" alt="Contact"/>
        <form>
            <input type="text" placeholder="First Name"/>
            <input type="text" placeholder="Last Name"/>
            <br/>
            <input type="textarea" placeholder="Tell us what happened!"/>
            <br/>
            <input type="submit" value="SUBMIT"/>
        </form>
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

<style scoped>
    .header {
        width: 75%;
        margin-top: 75px;
    }

    form {
        width: 800px;
        margin: 0 auto;
    }  

    input {
        background-color: rgb(55, 75, 52);
        border: 4px solid rgb(50, 68, 47);
        border-radius: 5px;
        outline: none;
        color: rgb(255, 255, 255);
    }

    input::placeholder {
        text-transform: uppercase;
        color: rgba(255, 255, 255, .7);
    }

    input[type="text"] {
        width: 197px;
        padding: 1em;
        margin-right: 5px;
        margin-bottom: 5px;
    }

    input[type="textarea"] {
        width: 405px;
        height: 200px;
        padding: 2em;
        margin-bottom: 10px;
        line-break:normal;
    }

    input[type="textarea"]::placeholder {
        margin-top: -100px;
    }

    input[type="submit"] {
        padding: .5em;
        width: 400px;
        color: rgba(255, 255, 255, .7);
        font-weight: 600;
        font-size: 20px;
        cursor: pointer;
    }
</style>

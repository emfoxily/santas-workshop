<template>
    <div>
        <Navigation />
        <img class="header" src="./contact.png" alt="Contact"/>
        <form>
            <input type="text" placeholder="First Name"/>
            <input type="text" placeholder="Last Name"/>
            <br/>
            <textarea placeholder="Tell us what happened!"/>
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

    input, textarea {
        background-color: rgb(230, 230, 230);
        border: 4px solid rgb(226, 226, 226);
        border-radius: 5px;
        outline: none;
        color: rgb(207, 28, 28);
        overflow-wrap: break-word;
    }

    input::placeholder, textarea::placeholder {
        text-transform: uppercase;
        color: rgb(207, 28, 28);
        font-size: 20px;
        font-weight: 600;
    }

    input[type="text"] {
        width: 203px;
        padding: 1em;
        margin-right: 5px;
        margin-bottom: 5px;
    }

    textarea {
        width: 405px;
        height: 250px;
        padding: 2em;
        margin-bottom: 10px;
        margin-left: -1px;
        line-break:normal;
        resize: none;
        font-size: 15px;
    }

    input[type="submit"] {
        padding: .5em;
        width: 465px;
        color: rgb(207, 28, 28);
        font-weight: 600;
        font-size: 20px;
        cursor: pointer;
        border: 4px solid rgb(219, 219, 219);
    }
</style>

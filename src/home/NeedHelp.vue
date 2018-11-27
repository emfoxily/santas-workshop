<template>
    <div class="needHelp">
        <div class="wrapper">
            <h1>
                Got a broken toy?
            </h1>
            <p>
                Get help from our most trained elves to get the toy you deserve!
            </p>
            <a href="/contact">
                <button>
                    Open a Ticket
                </button>
            </a>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Need-Help',
    }
</script>

<style scoped>
    .needHelp {
        background-image: url('../assets/peppermint.png');
        background-size: cover;
        justify-content: center;
        align-content: center;
        margin: 20px auto;
        width: 850px;
        padding: 2em;
        position: relative;
        border: 4px solid rgb(122, 19, 19);
        box-shadow: 5px 2px 20px rgba(0, 0, 0, .7);
    }

    .wrapper {
        background-image: url('../assets/woodbg.png');
        width: 800px;
        margin: 0 auto;
        border: 4px solid rgb(20, 12, 8);
        box-shadow: 5px 2px 20px rgba(0, 0, 0, .7);
    }

    .needHelp h1 {
        padding: .5em;
        font-size: 50px;
        color: rgb(255, 255, 255);
    }
    
    .needHelp p {
        color: rgb(255, 255, 255);
        padding: 1em;
        width: 500px;
        margin: 10px auto;
        margin-top: -35px;
    }

    .needHelp button {
        background-image: url('../assets/background.png');
        margin-bottom: 50px;
        padding: 1em;
        outline: none;
        border: 4px solid rgb(55, 75, 52);
        border-radius: 10px;
        text-transform: uppercase;
        font-weight: 600;
        font-size: 15px;
        color: rgb(255, 255, 255);
        cursor: pointer;
        box-shadow: 5px 2px 20px rgba(0, 0, 0, .7);
    }
</style>

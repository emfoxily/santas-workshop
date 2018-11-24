<template>
    <div>
        <Navigation />
        <img class="header" src="./meetTheTeam.png" alt="Meet the Team"/>
        <div class="staff">
            <div>
                <img src="./buddy.png" alt="Buddy"/>
                <h3>
                    Buddy the Elf
                </h3>
            </div>
            <div>
                <img src="./mingming.png" alt="Ming Ming"/>
                <h3>
                    Ming Ming
                </h3>
            </div>
            <div>
                <img src="./jovie.png" alt="Jovie"/>
                <h3>
                    Jovie
                </h3>
            </div>
        </div>
        <Trees />
    </div>
</template>

<script>
import Navigation from '../navigation/Navigation.vue';
import Trees from '../trees/Trees.vue';

export default {
    name: 'Meet-the-Team',
    components: {
        Navigation,
        Trees
    }
}
</script>

<style>
    .staff {
        display: flex;
        justify-content: center;
        align-content: center;
    }

    .staff img {
        width: 250px;
        height: 250px;
        margin-right: 20px;
        border: 4px solid rgb(20, 12, 8);
        box-shadow: 5px 2px 20px rgba(0, 0, 0, .7);
    }

    .staff h3 {
        margin-left: -20px;
        color: rgb(255, 255, 255);
    }

    .header {
        position: relative;
        margin-top: 75px;
        width: 75%;
    }
</style>
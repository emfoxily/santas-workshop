<template>
    <div>
        <Navigation />
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
    name: 'Meet the Team',
    components: {
        Navigation,
        Trees
    }
}
</script>

<style>
    .staff {
        display: flex;
        margin-top: 150px;
        justify-content: center;
        align-content: center;
    }

    .staff img {
        width: 200px;
        height: 200px;
        margin-right: 20px;
        border: 4px solid rgb(20, 12, 8);
    }

    .staff h3 {
        margin-left: -20px;
        color: rgb(255, 255, 255);
    }
</style>
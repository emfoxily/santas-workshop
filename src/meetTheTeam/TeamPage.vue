<template>
    <div>
        <Navigation />
        <img class="header" src="./meetTheTeam.png" alt="Meet the Team"/>
        <div class="staff">
            <div>
                <img v-bind:src="elves[0].elf_avatar" alt="Buddy"/>
                <h3>
                    {{ elves[0].elf_name }}
                </h3>
            </div>
            <div>
                <img v-bind:src="elves[1].elf_avatar" alt="Ming Ming"/>
                <h3>
                    {{ elves[1].elf_name }}
                </h3>
            </div>
            <div>
                <img v-bind:src="elves[2].elf_avatar" alt="Jovie"/>
                <h3>
                    {{ elves[2].elf_name }}
                </h3>
            </div>
        </div>
        <Trees />
    </div>
</template>

<script>
import Navigation from '../navigation/Navigation.vue';
import Trees from '../trees/Trees.vue';

import axios from "axios";

export default {
    name: 'Meet-the-Team',
    components: {
        Navigation,
        Trees
    },
    data() {
        return {
            elves:[],
        }
    },
    mounted() {
        axios({
            method: "GET", "url": "/elves"
        }).then(result => {
            this.elves = result.data;
            console.log(this.elves);         
        }, error => {
            console.log(error); 
        })
    },
    methods: {

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
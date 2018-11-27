<template>
    <div>
        <Navigation />
        <img class="header" src="./meetTheTeam.png" alt="Meet the Team"/>
        <div class="staff">
            <div>
                <img :src="elves[0].elf_avatar" @click="aboutBuddy()" alt="Buddy"/>
                <h3>
                    {{ elves[0].elf_name }}
                </h3>
            </div>
            <div>
                <img :src="elves[1].elf_avatar" @click="aboutMingMing()" alt="Ming Ming"/>
                <h3>
                    {{ elves[1].elf_name }}
                </h3>
            </div>
            <div>
                <img :src="elves[2].elf_avatar" @click="aboutJovie()" alt="Jovie"/>
                <h3>
                    {{ elves[2].elf_name }}
                </h3>
            </div>
        </div>
        <div class="wrapper" v-if="showBuddyAbout">
           <p class="blurb">
                {{ elves[0].elf_about }}
            </p>
        </div>
        <div class="wrapper" v-if="showMingMingAbout">
            <p class="blurb">
                {{ elves[1].elf_about }}
            </p>
        </div>
        <div class="wrapper" v-if="showJovieAbout">
            <p class="blurb">
                {{ elves[2].elf_about }}
            </p>
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
            showBuddyAbout: false,
            showMingMingAbout: false,
            showJovieAbout: false
        }
    },
    mounted() {
        axios({
            method: "GET", "url": "/elves"
        }).then(result => {
            this.elves = result.data;
            // console.log(this.elves);         
        }, error => {
            console.log(error); 
        })
    },
    methods: {
        aboutBuddy() {
            // console.log('hello!');
            this.showBuddyAbout = !this.showBuddyAbout;
            if (this.showMingMingAbout === true || this.showJovieAbout === true) {
                this.showMingMingAbout = false;
                this.showJovieAbout = false;
            }     
        },
        aboutMingMing() {
            // console.log('hello!');
            this.showMingMingAbout = !this.showMingMingAbout;
            if (this.showBuddyAbout === true || this.showJovieAbout === true) {
                this.showBuddyAbout = false;
                this.showJovieAbout = false;
            }        
        },
        aboutJovie() {
            // console.log('hello!');
            this.showJovieAbout = !this.showJovieAbout;
            if (this.showMingMingAbout === true || this.showBuddyAbout === true) {
                this.showMingMingAbout = false;
                this.showBuddyAbout = false;
            }        
        }
    }
}
</script>

<style scoped>
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
        cursor: pointer;
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

    .wrapper {
        background-image: url('../assets/peppermint.png');
        background-size: cover;
        width: 770px;
        height: 140px;
        padding: 1em;
        margin: 0 auto;
        border: 4px solid rgb(122, 19, 19);
        box-shadow: 5px 2px 20px rgba(0, 0, 0, .7);
    }

    .wrapper p {
        background-image: url('../assets/woodbg.png');
        margin: 0 auto;
        width: 725px;
        height: 100px;
        padding: 1em;
        color: rgb(255, 255, 255);
        border: 4px solid rgb(20, 12, 8);
        box-shadow: 5px 2px 20px rgba(0, 0, 0, .7);
    }
</style>
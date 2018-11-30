<template>
    <div class="chatTab" @click="openChat()">
        <img src="../assets/notification.png"/>
        Chat <h5>with</h5> {{ elves[0].elf_name }}
        <div class="chatWindow" v-if="showChat">
            <h4>
                {{ elves[0].elf_name }}
            </h4>

            <br/>

            <h6 class="recipient">
                {{ elves[0].elf_name }}
            </h6>

            <div class="recipientMessage">
                {{ elves[0].elf_messages[0] }}
            </div>

            <div class="recipientMessage">
                {{ elves[0].elf_messages[1] }}
            </div>

            <h6 class="sender">
                Walter Hobbs
            </h6>

            <div class="senderMessage">
                Yes, hi, Buddy. I know who I am.
            </div>

            <div class="senderMessage">
                I'm here because somehow my brand new car arrived without an engine and I want to know why.
            </div>

            <h6 class="recipient">
                {{ elves[0].elf_name }}
            </h6>

            <div class="recipientMessage">
                {{ elves[0].elf_messages[2] }}
            </div>

            <div class="recipientMessage">
                {{ elves[0].elf_messages[3] }}
            </div>

            <h6 class="sender">
                Walter Hobbs
            </h6>

            <div class="senderMessage">
                ELF-0456-89302
            </div>

            <h6 class="recipient">
                {{ elves[0].elf_name }}
            </h6>

            <div class="recipientMessage">
                {{ elves[0].elf_messages[5] }}
            </div>

            <div class="recipientMessage">
                {{ elves[0].elf_messages[6] }}
            </div>

             <div class="recipientMessage">
                {{ elves[0].elf_messages[7] }}
            </div>

            <h6 class="sender">
                Walter Hobbs
            </h6>

            <div class="senderMessage">
                What?
            </div>

            <h6 class="recipient">
                {{ elves[0].elf_name }}
            </h6>

            <div class="recipientMessage">
                {{ elves[0].elf_messages[8] }}
            </div>

            <h6 class="sender">
                Walter Hobbs
            </h6>

            <div class="senderMessage">
                You have GOT to be kidding me right now. I already sold my old car!
            </div>

            <h6 class="recipient">
                {{ elves[0].elf_name }}
            </h6>

            <div class="recipientMessage">
                {{ elves[0].elf_messages[9] }}
            </div>

            <h6 class="sender">
                Walter Hobbs
            </h6>

            <div class="senderMessage">
                I SOLD MY CAR, BUDDY! I WAS GOOD THIS YEAR!
            </div>

            <h6 class="recipient">
                {{ elves[0].elf_name }}
            </h6>

            <div class="recipientMessage">
                {{ elves[0].elf_messages[10] }}
            </div>

            <h6 class="sender">
                Walter Hobbs
            </h6>

            <div class="senderMessage">
                No, I don't want to sing a song. I've got to go to find me a working car.
            </div>

            <h6 class="recipient">
                {{ elves[0].elf_name }}
            </h6>

            <div class="recipientMessage">
                {{ elves[0].elf_messages[11] }}
            </div>
            
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: 'Chat',
    data() {
        return {
            showChat: false,
            elves: []
        }
    },
    mounted() {
        axios({
            method: "GET", "url": "/elves"
        }).then(result => {
            this.elves = result.data;      
        }, error => {
            console.log(error); 
        })
    },
    methods: {
        openChat() {
            this.showChat = !this.showChat;
        }
    }
}
</script>

<style>
    .chatTab {
        background-color: rgb(255, 255, 255);
        width: 300px;
        margin-right: 150px;
        text-transform: uppercase;
        font-weight: 600;
        color: rgb(55, 75, 52);
        padding: .5em;
        cursor: pointer;
        animation: notification 1s infinite;
    }

    .chatTab h5 {
        display: inline;
        text-transform: none;
    }

    .chatTab img {
        width: 15px;
        margin-right: 50px;
    }

    .chatWindow {
        background-color: rgb(255, 255, 255);
        width: 300px;
        height: 375px;
        position: absolute;
        margin-top: -382px;
        margin-left: -8px;
        padding: .5em 0;
        overflow: auto;
        padding: .5em;
    }

    .chatWindow h4 {
        position: fixed;
        background-color: rgb(219, 219, 219);
        margin-top: -8px;
        margin-left: -8px;
        width: 300px;
        padding: .5em;
    }

    .recipientMessage {
        background-color: rgb(212, 11, 11);
        font-size: 12px;
        color: rgb(255, 255, 255);
        border-radius: 10px;
        padding: .5em;
        text-align: left;
        margin-bottom: 5px;
    }

    .recipient {
        text-align: left;
    }

    .senderMessage {
        background-color: rgb(219, 219, 219);
        font-size: 12px;
        color: rgb(212, 11, 11);
        border-radius: 10px;
        padding: .5em;
        text-align: left;
        margin-bottom: 5px;
    }

    .sender {
        text-align: right;
    }

    .recipientMessage, .senderMessage {
        text-transform: none;
    }

    @keyframes notification {
        25% {
            background-color: rgb(219, 219, 219);
        }
    }
</style>

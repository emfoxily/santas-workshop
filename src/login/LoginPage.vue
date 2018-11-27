<template>
    <div>
        <div class="login">
            <input type="text" name="username" v-model="input.username" placeholder="USERNAME" />
            <br/>
            <input type="password" name="password" v-model="input.password" placeholder="PASSWORD" />
            <br/>
            <button type="button" @click="login()">LOGIN</button>
        </div>
        <img class="sign" src="../assets/login-sign.png" alt="Login Sign" />
        <Trees />
    </div>
</template>

<script>
    import Trees from '../trees/Trees.vue';

    export default {
        name: 'LoginPage',
        components: {
            Trees,
        },
        data() {
            return {
                input: {
                    username: "",
                    password: ""
                }
            }
        },
        methods: {
            login() {
                if(this.input.username != "" && this.input.password != "") {
                    if(this.input.username == this.$parent.mockAccount.username && this.input.password == this.$parent.mockAccount.password) {
                        this.$emit("authenticated", true);
                        this.$router.replace({ name: "secure" });
                    } else {
                        console.log('The username and / or password is incorrect');
                    }
                } else {
                    console.log('A username and password must be present');
                }
            }
        }
    };
</script>

<style scoped>

/*==================== login form ====================*/
    .login {
        position: absolute;
        width: 100vw;
        margin: 310px auto;
        position: absolute;
        line-height: 100px;
        z-index: 3;
    }

    .login button {
        background-color: rgb(47, 25, 15);
        width: 150px;
        padding: .5em;
        font-size: 20px;
        font-weight: 600;
        color: rgb(255, 255, 255);
        cursor: pointer;
        border: 1.5px solid rgb(20, 12, 8);
        border-radius: 10px;
        outline: none;
    }
    
    .login input[type=text], input[type=password] {
        background: transparent;
        font-size: 25px;
        color: rgb(255, 255, 255);
        padding: .3em;
        border: none;
        border-bottom: 1px solid rgba(255, 255, 255, .5);
        outline: none;
    }
    
    .login input::placeholder {
        color: rgba(255, 255, 255, .8);
        font-weight: 600;
    }

    .sign {
        margin-top: -10px;
        z-index: -1;
    }
</style>
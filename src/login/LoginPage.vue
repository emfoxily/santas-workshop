<template>
    <div>
        <Trees />
        <form action="/home" class="login">
            <input type="text" placeholder="USERNAME" />
            <br/>
            <input type="password" placeholder="PASSWORD" />
            <br/>
            <input type="submit" value="LOGIN" />
        </form>
        <img src="../assets/login-sign.png" alt="Login Sign" />
    </div>
</template>

<script>
    import Trees from '../trees/Trees.vue';

    export default {
        name: 'LoginPage',
        components: {
            Trees,
        }
    };
</script>

<style scope>

/*==================== login form ====================*/
    .login {
        width: 100vw;
        margin: 310px auto;
        position: absolute;
        line-height: 100px;
    }

    .login input[type=submit] {
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
</style>
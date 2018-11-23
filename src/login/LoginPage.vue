<template>
    <div>
        <form action="" class="login">
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
    export default {
        name: 'LoginPage',
    }
</script>

<style>
    .login {
        width: 100vw;
        margin: 300px auto;
        position: absolute;
        line-height: 107px;
    }

    .login input[type=submit] {
        background-color: rgb(74, 50, 35);
        width: 150px;
        padding: .5em;
        font-size: 20px;
        color: rgb(255, 255, 255);
        cursor: pointer;
        border: 1.5px solid rgb(37, 28, 22);;
        border-radius: 10px;
        outline: none;
    }
    
    .login input[type=text], input[type=password] {
        background: transparent;
        font-size: 25px;
        color: rgb(255, 255, 255);
        padding: .5em;
        border: none;
        border-bottom: 1px solid rgba(255, 255, 255, .8);
        outline: none;
    }
    
    .login input::placeholder {
        color: rgba(255, 255, 255, .8);
    }
</style>
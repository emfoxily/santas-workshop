<template>
    <nav>
        <ul>
            <li>
                <router-link to="/home">
                    <img src="../navigation/favicon.png" alt="favicon" />
                </router-link>
            </li>
            <li class="links">
                <router-link to="/team">
                      meet the team
                </router-link>
            </li>
            <li class="links">
                <router-link to="/contact">
                      contact
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: 'Navigation',
    };
</script>

<style>
    nav {
        background-image: url('../assets/woodbg.png');
        position: fixed;
        margin: 0 auto;
        top: 0;
        left: 0;
        width: 100%;
        box-shadow: 5px 2px 20px rgba(0, 0, 0, .7);
        border-bottom: 4px solid rgb(20, 12, 8);
        z-index: 3;
    }
    
    nav li {
        list-style: none;
        padding: .5em 2em 0 0;
    }
    
    nav ul {
        display: flex;
        align-content: center;
    }

    nav img {
        width: 25px;
    }
    
    .links a {
        font-weight: 600;
        color: rgba(255, 255, 255, .9);
        text-transform: uppercase;
        text-decoration: none;
        border-bottom: 1px solid rgba(255, 255, 255, 0);
    }

    .links a:hover {
        border-bottom: 1px solid rgba(255, 255, 255, 1);
        transition: 1s;
    }

</style>

<template>
    <div class="AppHeader">
        <div class="container">
            <div class="logo">mohamed</div>
            <ul class="text-right">
                <router-link to="/" tag="li" exact><a> Home</a></router-link>
                <router-link to="/about" tag="li"><a>About</a></router-link>
                <router-link to="/help" tag="li"><a>Help</a></router-link>
                <router-link to="/blog" tag="li"><a>blog</a></router-link>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    name: "AppHeader"
};
</script>
<style lang="scss" scoped>
.AppHeader {
    background-color: #333;
    color: #fff;
    overflow: hidden;
    .logo {
        font-size: 24px;
        padding: 10px;
        float: left;
        width: 200px;
    }
    ul {
        //float: left;
        margin: 0;
        width: calc(100% - 200px);

        li {
            padding: 10px;
            display: inline-block;
            font-size: 20px;
            a {
                color: #fff;
                text-decoration: none;
            }
        }
    }
}
</style>

<template>
    <div class="our-help">
        <h1 v-bold.red>{{ pageName }}</h1>
        <p >{{ pageDescription }}</p>
    </div>
</template>
<script>
export default {
    name: "help",
    data: function() {
        return {
            pageName: "Help us",
            pageDescription: "This is Help "
        };
    }
};
</script>

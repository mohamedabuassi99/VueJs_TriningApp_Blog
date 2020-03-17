<template>
    <div class="post-box">
        <span class="post-views">{{ views }}</span>
        <h3 class="post-title" >{{ title }}</h3>
        <span class="post-date"> {{ date }}</span>
        <p class="post-content">
            {{ content | shorten(50, " ...") }}
        </p>
        <div class="row">
            <div class="col-sm-6">
                <span class="post-auther" >{{ auther | reverse }}</span>
            </div>

            <div class="col-sm-6 text-right">
                <span class="post-category">{{ category | uppercase }}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "post",
    props: ["views", "title", "date", "content", "auther", "category"]
};
</script>

<style lang="scss" scoped>
.post-box {
    padding: 16px;
    margin-bottom: 15px;
    background-color: #fff;
    box-shadow: 0 0 10px #ddd;
    border-radius: 10px;
    position: relative;
    text-align: left;
    .post-views {
        position: absolute;
        padding: 3px;
        top: 5px;
        right: 5px;
        background-color: #666;
        border-radius: 4px;
        color: white;
        text-align: center;
        font-weight: bold;
    }
    .post-title {
        color: #176bca;
        padding: 10px;
    }
    .post-date {
        display: block;
        padding: 0 0 5px;
        color: #aaa;
        font-size: 14px;
    }
    .post-content {
        line-height: 2;
        color: #444;
    }
    .post-auther {
        background-color: #aaa;
        padding: 5px 10px;
        border-radius: 5px;
        color: white;
    }
    .post-category {
        background-color: #aaa;
        padding: 5px 10px;
        border-radius: 5px;
        color: white;
    }
}
</style>

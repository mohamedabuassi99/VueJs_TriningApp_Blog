<template>
    <div class="our-blog">
        <br />
        <div class="container">
            <div class="row">
                <div class="col-md-8">
                    <div class="posts-area">
                        <post
                            v-for="post in posts"
                            v-bind:key="post.id"
                            v-bind:views="post.views"
                            v-bind:title="post.title"
                            v-bind:date="post.date"
                            v-bind:content="post.content"
                            v-bind:auther="post.auther"
                            v-bind:category="post.category"
                        ></post>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="sidebar">
                        <sidebar></sidebar>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import post from "@/components/Blog/BlogPosts.vue";
import sidebar from "@/components/Blog/sidebar.vue";
import jsonPost from "../json/blogpost.json";

export default {
    name: "blog",
    data: function() {
        return {
            pageName: "blog",
            pageDescription: "This is blog ",
            posts: jsonPost
        };
    },
    components: {
        post,
        sidebar
    }
};
</script>

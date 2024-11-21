<template>
    <div class="home-hero-image">
        <img :src="randomImage" alt="Shy's Personal Blog">
    </div>
</template>

<style>
.home-hero-image {
    max-width: 65%;
    z-index: 2;
}
</style>

<script setup>
import { ref } from 'vue';
const images = [
    '/personal-blog/icon/吃瓜.svg',
    // '/personal-blog/icon/加油.svg',
    // '/personal-blog/icon/打call.svg',
    // '/personal-blog/icon/酷.svg',
    // '/personal-blog/icon/撇嘴.svg',
    // '/personal-blog/icon/色.svg',
    // '/personal-blog/icon/右哼哼.svg',
    // '/personal-blog/icon/晕.svg',
]; 
const randomImage = ref(images[Math.floor(Math.random() * images.length)]);
</script>
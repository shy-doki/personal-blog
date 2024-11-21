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
const images = [
    '../../../public/icon/加油.svg',
    '../../../public/icon/打call.svg',
    '../../../public/icon/酷.svg',
    '../../../public/icon/撇嘴.svg',
    '../../../public/icon/色.svg',
    '../../../public/icon/右哼哼.svg',
    '../../../public/icon/晕.svg',
]; 
const randomImage = images[Math.floor(Math.random() * images.length)];
</script>
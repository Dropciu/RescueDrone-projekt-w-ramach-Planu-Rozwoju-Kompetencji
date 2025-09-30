<script setup>
    import Navbar from '~/components/main/Navbar.vue'
    import Footer from "~/components/main/Footer.vue"
</script>

<template>
    <Navbar></Navbar>

    <slot />

    <Footer></Footer>
</template>
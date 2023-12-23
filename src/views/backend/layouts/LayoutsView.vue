<script setup>
import HeaderView from './HeaderView.vue'
import FooterView from './FooterView.vue'
</script>
<template>
    <main>
        <HeaderView />
             <RouterView />
        <FooterView />
    </main>
</template>
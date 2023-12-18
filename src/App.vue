<script setup>
import {  RouterView } from 'vue-router'
// import { RouterLink RouterView } from 'vue-router'
// import HeaderView from './components/HeaderView.vue'
import HeaderView from './views/HeaderView.vue'
import FooterView from './views/FooterView.vue'
</script>

<template>
  <HeaderView/>
  <RouterView />
  <FooterView/>
</template>



<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import Header from '@/components/Header.vue';
import Footer from '@/components/Footer.vue';

const route = useRoute();
const footer = computed(() => route.meta.footer);
</script>

<template>
  <Header />
  <slot />

  <Footer v-if="footer" />
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
  <header v-if="route.meta.header" id="header" class="px-8 my-5">
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <div class="text-xl font-bold text-dark">{{ route.meta.header.title }}</div>
      </div>
      <router-link :to="route.meta.header['icon-router']">
        <i class="t2ico text-2xl" :class="route.meta.header.icon"></i>
      </router-link>
    </div>
  </header>
</template>

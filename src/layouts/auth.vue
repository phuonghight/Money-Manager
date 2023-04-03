<script setup>
import logo from '@/assets/images/iMoney_Logo.png';
</script>

<template>
  <div class="text-center mt-12">
    <div class="w-20 mx-auto mb-5">
      <img :src="logo" alt="iMoney Brand Logo" class="w-full h-auto" />
    </div>
    <h1 class="text-2xl font-bold">Best way to saving Your Money</h1>
  </div>
  <slot />
</template>

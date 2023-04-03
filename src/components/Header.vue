<script setup>
import { auth } from '@/config/firebase';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const header = computed(() => route.meta.header);

const user = computed(() => auth.currentUser);
</script>

<template>
  <header v-if="header" id="header" class="px-8 py-6">
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <div v-if="header.leading" class="w-12 h-12 object-cover overflow-hidden rounded-full mr-4">
          <img
            src="https://i.pinimg.com/550x/dd/25/df/dd25df36b75a4765cd4ddef557e9aafe.jpg"
            alt="User's avatar"
            class="w-full h-auto"
          />
        </div>
        <div class="text-xl font-bold text-dark">
          {{ header.leading ? 'Hi, ' + user.displayName : header.title }}
        </div>
      </div>

      <router-link v-if="header.icon" :to="header['icon-router']">
        <i class="t2ico text-2xl" :class="header.icon"></i>
      </router-link>

      <div v-else class="text-dark font-semibold">{{ header.traning.text }}</div>
    </div>
  </header>
</template>

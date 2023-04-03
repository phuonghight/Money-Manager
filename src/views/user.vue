<script setup>
import { useUser } from '@/composables/useUser';
import { onBeforeMount, watchEffect } from 'vue';

const { getUser } = useUser();
const { user } = getUser();
</script>

<template>
  <div>User</div>
  <div v-if="user" class="mt-8">
    <div>{{ user.displayName }}</div>
    <div>{{ user.email }}</div>
  </div>
  <div v-else>Loading...</div>
</template>

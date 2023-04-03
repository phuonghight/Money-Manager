<script setup>
import { useRouter } from 'vue-router';
import { useLogout } from '@/composables/useLogout';

const router = useRouter();
const { error, logout } = useLogout();

const onLogout = async () => {
  await logout();
  if (!error.value) router.push({ name: 'Login', params: {} });
};

onLogout();
</script>

<template>
  <div class="mt-8 text-center text-2xl font-bold">logout page</div>
</template>

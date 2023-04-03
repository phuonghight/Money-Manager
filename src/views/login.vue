<script setup>
import { ref } from 'vue';
import { useLogin } from '@/composables/useLogin.js';
import { useRouter } from 'vue-router';

const email = ref('');
const password = ref('');
const router = useRouter();
const { error, isPending, onLogin } = useLogin();

const loginHanler = async () => {
  await onLogin(email.value, password.value);
  console.log('succesful login');
  if (!error.value) router.push({ name: 'Home', params: {} });
};
</script>

<template>
  <div class="mt-8">
    <div class="container px-8 mx-auto">
      <form action="" @submit.prevent="loginHanler">
        <div class="flex flex-col">
          <label for="email" class="font-semibold text-gray-400 mb-2">Email Address</label>
          <input
            v-model="email"
            id="email"
            class="pl-4 py-3 rounded-lg outline-none focus:border focus:border-gray-600"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>

        <div class="flex flex-col mt-5">
          <label for="password" class="font-semibold text-gray-400 mb-2">Password</label>
          <input
            v-model="password"
            id="password"
            class="pl-4 py-3 rounded-lg outline-none focus:border focus:border-gray-600"
            name="password"
            type="password"
            placeholder="Enter your password"
            required
          />
        </div>

        <button
          v-if="!isPending"
          type="submit"
          class="bg-primary w-full rounded-lg py-3 text-white font-bold mt-8"
        >
          Sign In
        </button>
        <button
          v-else
          type="button"
          class="bg-gray-300 w-full rounded-lg py-3 text-white font-bold mt-8 cursor-not-allowed"
        >
          Loadding...
        </button>
      </form>
      <div v-if="error" class="text-red mt-5">{{ error }}</div>
      <div class="text-center mt-5">
        <span class="">I'm a new user.</span>
        <router-link :to="{ name: 'Register', params: {} }" class="ml-2 text-primary font-bold"
          >Sign Up</router-link
        >
      </div>
    </div>
  </div>
</template>

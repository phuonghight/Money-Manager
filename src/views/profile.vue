<script setup>
import { PROFILE_OPTIONS } from '@/constant';
import { useUser } from '@/composables/useUser';
import { ref } from 'vue';

const { getUser } = useUser();
const { user } = getUser();

const options = ref(PROFILE_OPTIONS);
</script>

<template>
  <div v-if="!user">Loading...</div>
  <div v-else>
    <div class="row">
      <div class="my-12 flex flex-col items-center">
        <div class="mb-4 w-20 h-20 overflow-hidden rounded-full object-cover">
          <img
            src="https://i.pinimg.com/550x/dd/25/df/dd25df36b75a4765cd4ddef557e9aafe.jpg"
            alt="User's avatar"
            class="w-full h-auto"
          />
        </div>
        <div class="font-bold text-xl text-primary">{{ user.displayName }}</div>
        <div class="font-semibold text-dark">{{ user.email }}</div>
      </div>
    </div>

    <div class="row">
      <div class="container px-8 mx-auto">
        <div class="font-bold text-xl text-primary">General</div>

        <ul class="mt-3">
          <li v-for="(option, index) in options" :key="option.title">
            <router-link :to="option.router" class="flex justify-between items-cente py-1 my-2">
              <div
                class="flex items-center text-left"
                :class="{ 'text-red': index === options.length - 1 }"
              >
                <i class="t2ico text-2xl" :class="option.leading.icon"></i>
                <p class="font-semibold ml-4">{{ option.title }}</p>
              </div>
              <i class="t2ico t2ico-arrow-right text-2xl"></i>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

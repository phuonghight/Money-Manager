<script setup>
import { computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { auth, firestore } from '@/config/firebase';
import { addDoc, collection } from '@firebase/firestore';
import { useSubmitForm } from '@/stores/useSubmitForm';

const { formdata, onSubmit } = useSubmitForm();

const route = useRoute();
const router = useRouter();
const header = computed(() => route.meta.header);

const user = computed(() => auth.currentUser);

const goBack = () => {
  router.go(-1);
};

const onClick = async () => {
  if (header.value.traning.method === 'addNewTransaction') {
    console.log(formdata.value);
    try {
      const docRef = await addDoc(collection(firestore, 'transactions'), formdata.value);

      console.log('Document written with ID:' + docRef.id);
    } catch (error) {
      console.log('Error adding document: ' + error);
    } finally {
      router.push({ name: 'Report', params: {} });
    }
  } else if (header.value.traning.method === 'cancelSelectCategory') {
    console.log('cancel select category');
  }
};
</script>

<template>
  <header v-if="header" id="header" class="px-8 py-6">
    <div class="flex items-center justify-between">
      <div class="flex items-center">
        <div
          v-if="header.leading.avt"
          class="w-12 h-12 object-cover overflow-hidden rounded-full mr-4"
        >
          <img
            src="https://i.pinimg.com/550x/dd/25/df/dd25df36b75a4765cd4ddef557e9aafe.jpg"
            alt="User's avatar"
            class="w-full h-auto"
          />
        </div>

        <div v-else-if="header.leading['go-back']" class="transform rotate-180 mr-2">
          <button @click="goBack">
            <i class="t2ico t2ico-arrow-right text-2xl"></i>
          </button>
        </div>
        <div class="text-xl font-bold text-dark">
          {{ header.leading.avt ? 'Hi, ' + user.displayName : header.title }}
        </div>
      </div>

      <router-link v-if="header.icon" :to="header['icon-router']">
        <i class="t2ico text-2xl" :class="header.icon"></i>
      </router-link>

      <div @click="onClick" v-else class="text-dark font-semibold">{{ header.traning.text }}</div>
    </div>
  </header>
</template>

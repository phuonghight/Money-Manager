<script setup>
import { useSubmitForm } from '@/stores/useSubmitForm';
import { ref, watchEffect } from 'vue';

const isMoreDetails = ref(false);

let { formdata, onSubmit } = useSubmitForm();

const total = ref('');
const category = ref('');
const note = ref('');
const location = ref('');
const withPerson = ref('');
const time = ref(
  `${new Date().getFullYear()}-${(new Date().getMonth() + 1).toString().padStart(2, 0)}-${new Date()
    .getDate()
    .toString()
    .padStart(2, 0)}`
);

const onAddNewTransaction = () => {
  const transaction = {
    total: total.value,
    category: category.value,
    note: note.value,
    time: time.value,
    location: location.value,
    withPerson: withPerson.value
  };
  formdata.value = transaction;
};

watchEffect(() => {
  onSubmit(onAddNewTransaction);
});
</script>

<template>
  <form action="" @submit.prevent="onAddNewTransaction">
    <div class="row px-8 py-4 mx-auto bg-white rounded-lg">
      <label for="total">
        <div class="flex justify-between items-center">
          <div class="w-12 text-right">
            <div class="border inline-block border-dark rounded-md py-0.5 px-1 font-bold">USD</div>
          </div>
          <div class="border-b py-2 border-b-gray-200 ml-5 flex flex-col flex-1">
            <span>Total</span>
            <input
              type="text"
              name="total"
              id="total"
              class="outline-none text-4xl text-dark w-full bg-white"
              placeholder="0"
              v-model.number="total"
            />
          </div>
        </div>
      </label>

      <label for="category">
        <div class="flex justify-between items-center">
          <div class="w-12 text-right">
            <div class="w-8 h-8 bg-red rounded-full inline-block"></div>
          </div>
          <div class="border-b py-2 border-b-gray-200 ml-5 flex flex-col flex-1">
            <input
              type="text"
              name="category"
              id="category"
              class="outline-none text-2xl text-dark w-full bg-white"
              placeholder="Select a category"
              v-model="category"
            />
          </div>
        </div>
      </label>

      <label for="note">
        <div class="flex justify-between items-center">
          <div class="w-12 text-right">
            <i class="t2ico t2ico-document text-2xl"></i>
          </div>
          <div class="border-b py-2 border-b-gray-200 ml-5 flex flex-col flex-1">
            <input
              type="text"
              name="note"
              id="note"
              class="outline-none text-xl text-dark w-full bg-white"
              placeholder="Note"
              v-model="note"
            />
          </div>
        </div>
      </label>

      <label for="time">
        <div class="flex justify-between items-center">
          <div class="w-12 text-right">
            <i class="t2ico t2ico-calendar text-2xl"></i>
          </div>
          <div class="border-b py-2 border-b-gray-200 ml-5 flex flex-col flex-1">
            <input
              type="date"
              name="time"
              id="time"
              class="outline-none text-xl text-dark w-full bg-white"
              v-model="time"
              @change="timeChange"
            />
          </div>
        </div>
      </label>

      <label for="wallet">
        <div class="flex justify-between items-center">
          <div class="w-12 text-right">
            <i class="t2ico t2ico-wallet text-2xl"></i>
          </div>
          <div class="py-2 ml-5 flex flex-col flex-1">
            <div class="font-semibold">My Wallet</div>
          </div>
        </div>
      </label>
    </div>

    <div v-if="!isMoreDetails" class="row mt-4 bg-white rounded-lg text-center">
      <button class="p-4 font-semibold text-primary" @click="isMoreDetails = true">
        More Details
      </button>
    </div>

    <div v-else>
      <div class="row mt-4 px-8 py-4 mx-auto bg-white rounded-lg">
        <label for="location">
          <div class="flex justify-between items-center">
            <div class="w-12 text-right">
              <i class="t2ico t2ico-location text-2xl"></i>
            </div>
            <div class="border-b py-2 border-b-gray-200 ml-5 flex flex-col flex-1">
              <input
                type="text"
                name="location"
                id="location"
                class="outline-none text-xl text-dark w-full bg-white"
                placeholder="Select a location"
                v-model="location"
              />
            </div>
          </div>
        </label>

        <label for="with-person">
          <div class="flex justify-between items-center">
            <div class="w-12 text-right">
              <i class="t2ico t2ico-users text-2xl"></i>
            </div>
            <div class="py-2 ml-5 flex flex-col flex-1">
              <input
                type="text"
                name="with-person"
                id="with-person"
                class="outline-none text-xl text-dark w-full bg-white"
                placeholder="With person"
                v-model="withPerson"
              />
            </div>
          </div>
        </label>
      </div>

      <div class="row mt-4 px-8 py-4 mx-auto bg-white rounded-lg">
        <label for="file">
          <div class="flex justify-between items-center text-primary">
            <div class="w-12 text-right">
              <i class="t2ico t2ico-camera text-2xl"></i>
            </div>
            <div class="py-2 ml-5 flex flex-col flex-1 font-semibold">Upload photo</div>
            <input type="file" id="file" hidden />
          </div>
        </label>
      </div>
    </div>
  </form>
</template>

import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useSubmitForm = defineStore('submit-form', () => {
  const formdata = ref({});

  function onSubmit(callback) {
    callback();
  }

  return { formdata, onSubmit };
});

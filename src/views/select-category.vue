<script setup>
import { ref } from 'vue';
import { categoriesStore } from '@/stores/categoriesStore';

const { categories, changeSelected } = categoriesStore();

const onChangeCategory = (category) => {
  changeSelected(category.name);
  console.log(categories);
};

const types = ref([
  {
    type: 'revenue',
    isChecked: false
  },
  {
    type: 'expenses',
    isChecked: false
  }
]);

const changeTypeTransaction = (type) => {
  types.value.forEach((t) => {
    t.isChecked = t.type === type ? !t.isChecked : false;
  });
  console.log(types.value);
};

const submitSelectCategory = () => {
  
};
</script>

<template>
  <div class="container">
    <div class="row px-8 mx-auto">
      <div class="mb-4 flex items-center justify-between">
        <label
          v-for="type in types"
          :key="type.type"
          :for="type.type"
          class="text-center font-semibold bg-white rounded-lg py-3 w-[45%]"
          :class="{ 'text-primary': type.isChecked }"
        >
          {{ type.type.charAt(0).toUpperCase() + type.type.slice(1) }}
          <input
            type="checkbox"
            name=""
            :id="type.type"
            @change="changeTypeTransaction(type.type)"
            :checked="type.isChecked"
          />
        </label>
      </div>
    </div>

    <div class="col px-8 mx-auto">
      <label
        v-for="category in categories"
        :key="category.name"
        :for="category.name"
        class="w-full pl-4 py-3 mb-4 flex items-center bg-white rounded-lg"
        :class="{ 'border border-primary': category.isSelected }"
      >
        <div class="w-8 h-8 rounded-lg" :style="{ backgroundColor: category.color }"></div>
        <div class="font-semibold ml-4" :class="{ 'text-primary': category.isSelected }">
          {{ category.name }}
        </div>
        <input
          type="radio"
          :id="category.name"
          :checked="category.isSelected"
          @click="onChangeCategory(category)"
          hidden
        />
      </label>
    </div>

    <div class="col px-8 mx-auto">
      <button class="w-full pl-4 py-3 mb-4 flex items-center bg-white rounded-lg">
        <div class="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
          <i class="t2ico t2ico-plus text-white text-2xl"></i>
        </div>
        <span class="font-semibold ml-4 text-primary">Add new category</span>
      </button>
    </div>
  </div>

  <button
    class="absolute bottom-8 left-28 right-28 py-2 rounded-xl bg-primary text-white font-bold"
    @click="submitSelectCategory"
  >
    Confirm
  </button>
</template>

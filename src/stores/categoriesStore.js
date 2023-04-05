import { ref } from 'vue';
import { defineStore } from 'pinia';

export const categoriesStore = defineStore('categories', () => {
  const categories = ref([
    {
      color: '#e9dffa',
      name: 'Payment',
      isSelected: false
    },
    {
      color: '#fed99d',
      name: 'Withdrawal',
      isSelected: false
    },
    {
      color: '#bcfff6',
      name: 'Education',
      isSelected: false
    }
  ]);
  
  const changeSelected = (name) => {
    categories.value.forEach((t) => {
      t.isSelected = name === t.name ? !t.isSelected : false;
    });
  };

  const addNewCategory = (category) => {
    try {
      if (categories.value.some((cat) => cat.name == category.name))
        throw new Error(
          `The category with name: ${category.name} is exist!!! Please try another name`
        );
      categories.value.push(category);
    } catch (error) {
      alert(error);
    }
  };

  const resetSelected = () => {
    categories.value.forEach((cat) => {
      cat.isSelected = false;
    });
  };

  const delCategory = (name) => {};

  return { categories, changeSelected, addNewCategory, resetSelected };
});

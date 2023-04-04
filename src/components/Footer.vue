<script setup>
import { useRouter } from 'vue-router';
import { FOOTER_NAV_ITEMS } from '@/constant';

const router = useRouter();

const pushToNewTransactionView = () => {
  router.push({ name: 'NewTransaction', params: {} });
};
</script>

<template>
  <footer id="footer" class="fixed left-0 right-0 bottom-0 bg-white">
    <ul class="flex justify-around items-center h-full">
      <li v-for="(item, index) in FOOTER_NAV_ITEMS" :key="index">
        <router-link :to="item.router" class="p-4 flex justify-center items-center">
          <i class="text-2xl text-dark transition-all" :class="item.icon"></i>
        </router-link>
      </li>
    </ul>

    <div
      class="absolute h-7 w-14 bg-bg-primary top-0 left-1/2 transform -translate-x-1/2 rounded-bl-[28px] rounded-br-[28px] flex justify-center items-center"
    ></div>

    <div
      class="absolute h-12 w-12 bg-primary -top-6 left-1/2 transform -translate-x-1/2 rounded-full flex justify-center items-center cursor-pointer"
      @click="pushToNewTransactionView"
    >
      <i class="t2ico t2ico-plus text-white text-2xl"></i>
    </div>
  </footer>
</template>

<style scoped>
footer#footer ul li:nth-child(2) {
  margin-right: 10%;
}
footer#footer ul li:nth-child(3) {
  margin-left: 10%;
}
footer#footer .router-link-active.router-link-exact-active i {
  color: #0012ff;
  /* font-size: 28px; */
  transform: translateY(-15%);
}
</style>

import { auth } from '@/config/firebase';
import { ref } from 'vue';

const user = ref(auth.currentUser);

auth.onAuthStateChanged((_user) => {
  if (_user) user.value = _user;
});

const getUser = () => ({ user });

export const useUser = () => ({ getUser });

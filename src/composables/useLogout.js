import { signOut } from 'firebase/auth';
import { ref } from 'vue';
import { auth } from '@/config/firebase';

const error = ref(null);

const logout = async () => {
  error.value = null;
  try {
    const respone = await signOut(auth);

    return respone;
  } catch (err) {
    console.error(err.message);
    error.value = err.message;
  }
};

export const useLogout = () => ({ error, logout });

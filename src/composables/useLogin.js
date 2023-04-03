import { signInWithEmailAndPassword } from 'firebase/auth';
import { ref } from 'vue';
import { auth } from '@/config/firebase';

const error = ref(null);
const isPending = ref(false);

const onLogin = async (email, password) => {
  error.value = null;
  isPending.value = true;
  try {
    const respone = await signInWithEmailAndPassword(auth, email, password);

    return respone;
  } catch (err) {
    console.error(err.message);
    error.value = err.message;
  } finally {
    isPending.value = false;
  }
};

export const useLogin = () => ({ error, isPending, onLogin });

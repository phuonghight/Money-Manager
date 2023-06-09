import { auth } from '@/config/firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { ref } from 'vue';

const error = ref(null);
const isPending = ref(false);

const onRegister = async (email, password, fullname) => {
  error.value = null;
  isPending.value = true;
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);

    const user = res.user;

    await updateProfile(user, {
      displayName: fullname
    });

    return res;
  } catch (err) {
    console.log(err);
    error.value = err.message;
  } finally {
    isPending.value = false;
  }
};

export const useRegister = () => ({ error, isPending, onRegister });

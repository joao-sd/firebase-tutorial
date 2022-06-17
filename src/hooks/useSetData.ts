import { addDoc, collection } from "@firebase/firestore";
import { db } from "../constants/firebase.constants";

export function useSetData<T>(
  collectionPath: string
): (payload: Object) => Promise<void> {
  const collectionRef = collection(db, collectionPath);

  const set = async (payload: Object) => {
    try {
      await addDoc(collectionRef, payload);
    } catch (error) {
      console.error(error);
    }
  };

  return set;
}

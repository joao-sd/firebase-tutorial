import { addDoc, collection } from "@firebase/firestore";
import { db } from "../constants/firebase.constants";

export function useCreateData<T extends Object>(
  collectionPath: string
): (payload: T) => Promise<void> {
  const collectionRef = collection(db, collectionPath);

  const create = async (payload: T) => {
    try {
      await addDoc(collectionRef, payload);
    } catch (error) {
      console.error(error);
    }
  };

  return create;
}

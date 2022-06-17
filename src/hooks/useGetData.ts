import { collection, getDocs } from "@firebase/firestore";
import { db } from "../constants/firebase.constants";

export function useGetData<T>(
  collectionPath: string
): () => Promise<T[] | undefined> {
  const collectionRef = collection(db, collectionPath);

  const get = async () => {
    try {
      const response = await getDocs(collectionRef);

      const data = response.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });

      return data as unknown as T[];
    } catch (error) {
      console.error(error);
    }
  };

  return get;
}

import { doc, DocumentData, updateDoc } from "@firebase/firestore";
import { db } from "../constants/firebase.constants";

export function useUpdateData<T>(
  collectionPath: string
): (documentId: string, payload: Partial<T>) => Promise<void> {
  const update = async (documentId: string, payload: Partial<DocumentData>) => {
    try {
      const documentRef = doc(db, collectionPath, documentId);

      await updateDoc(documentRef, payload);
    } catch (error) {
      console.error(error);
    }
  };

  return update;
}

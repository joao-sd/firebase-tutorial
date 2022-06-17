import { deleteDoc, doc } from "@firebase/firestore";
import { db } from "../constants/firebase.constants";

export function useDeleteData<T>(
  collectionPath: string
): (documentId: string) => Promise<void> {
  const deleteData = async (documentId: string) => {
    try {
      const documentRef = doc(db, collectionPath, documentId);

      await deleteDoc(documentRef);
    } catch (error) {
      console.error(error);
    }
  };

  return deleteData;
}

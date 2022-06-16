import { collection, DocumentData, getDocs } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../constants/firebase.constants";

export function useData<T>(collectionPath: string): T[] | undefined {
  const [data, setData] = useState<DocumentData>();

  const collectionRef = collection(db, collectionPath);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getDocs(collectionRef);

        setData(
          response.docs.map((doc) => {
            return { ...doc.data(), id: doc.id };
          })
        );
      } catch (error) {
        console.error(error);
      }
    };
    fetchUsers();
  }, []);

  return data as T[];
}

import { collection, DocumentData, getDocs } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../constants/firebase.constants";

export const useData = (collectionPath: string) => {
  const [data, setData] = useState<DocumentData>();

  const collectionRef = collection(db, collectionPath);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getDocs(collectionRef);

        setData(response.docs.map((doc) => doc.data()));
      } catch (error) {
        console.error(error);
      }
    };
    fetchUsers();
  }, []);

  return data;
};

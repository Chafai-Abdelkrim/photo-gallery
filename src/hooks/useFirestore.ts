import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase-config";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

const useFirestore = (cluster: any) => {
  const [docs, setDocs] = useState<any[]>([]);

  useEffect(() => {
    const q = query(
      collection(projectFirestore, cluster),
      orderBy("createdAt", "desc")
    );
    const unsub = onSnapshot(q, (querySnapshot) => {
      const documents: any[] = [];
      querySnapshot.forEach((doc) => {
        documents.push({ ...doc.data(), id: doc.id });
      });
      setDocs(documents);
    });

    return () => unsub();
  }, [cluster]);

  return { docs };
};

export default useFirestore;

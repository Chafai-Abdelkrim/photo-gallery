import { useState, useEffect } from "react";
import { projectStorage, projectFirestore } from "../firebase-config";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";


const useStorage = (file: any) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState("");
  
  useEffect(() => {
    const storageRef = ref(projectStorage, `${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snap: any) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err: any) => {
        setError(err);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((url) => {
          addDoc(collection(projectFirestore, "images"), {
            name: file.name,
            url: url,
            createdAt: serverTimestamp(),
          });
          setUrl(url);
        });
      }
    );
  }, [file]);

  return { progress, error, url };
};

export default useStorage;

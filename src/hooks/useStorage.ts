import { useState, useEffect } from "react";
import { projectStorage } from "../firebase/config";

const useStorage = (file: any) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);

  useEffect(() => {
    const storageRef = projectStorage.ref(file.name);

    storageRef.put(file).on(
      "state_changer",
      (snap: any) => {
        let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
        setProgress(percentage);
      },
      (err: any) => {
        setError(err);
      },
      async () => {
        const url = await storageRef.getDownloadUrl();
        setUrl(url);
      }
    );
  }, [file]);

  return { progress, error, url };
};

export default useStorage;

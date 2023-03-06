import { useEffect } from "react";
import useStorage from "../hooks/useStorage";

interface Props {
  file: any;
  setFile: React.Dispatch<any>;
}

const ProgressBar = ({ file, setFile }: Props) => {
  const { progress, url } = useStorage(file);

  useEffect(() => {
    if (url) {
      setFile(null);
    }
  }, [url, setFile]);

  return <div className="progress-bar" style={{ width: progress + "%" }}></div>;
};

export default ProgressBar;

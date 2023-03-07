import useFirestore from "../hooks/useFirestore";

const ImageGrid = ({ setSelectedImg }: any) => {
  const { docs } = useFirestore("images");

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <div className="img-wrap" key={doc.id}
            onClick={() => setSelectedImg(doc.url)}
          >
            <img src={doc.url} alt="uploaded" />
          </div>
        ))}
    </div>
  );
};

export default ImageGrid;

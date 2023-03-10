import useFirestore from "../hooks/useFirestore";
import { motion } from 'framer-motion'

const ImageGrid = ({ setSelectedImg }: any) => {
  const { docs } = useFirestore("images");

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            className="img-wrap"
            key={doc.id}
            layout
            onClick={() => setSelectedImg(doc.url)}
            whileHover={{ opacity: 1 }}
          >
            <motion.img src={doc.url} alt="uploaded" 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            />
          </motion.div>
        ))}
    </div>
  );
};

export default ImageGrid;

import { motion } from "framer-motion";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
};

const Support = ({ icon, title, description }: Props) => {
  return (
    <motion.div variants={childVariant} className="mb-5 flex w-4/5 gap-6">
      <div className="text-primary-500">
        <div className="p-3 shadow-md">{icon}</div>
      </div>
      <div>
        <h1 className="text-2xl font-bold text-black">{title}</h1>
        <p className="my-2">{description}</p>
      </div>
    </motion.div>
  );
};

export default Support;

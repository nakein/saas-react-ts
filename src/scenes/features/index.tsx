import HText from "@/shared/HText";
import { FeatureType, SelectedPage } from "@/shared/types";
import Features1 from "@/assets/Features1.png";
import Features2 from "@/assets/Features2.png";
import Features3 from "@/assets/Features3.png";
import { motion } from "framer-motion";
import Feature from "./Feature";
import ActionButton from "@/shared/ActionButton";

const features: Array<FeatureType> = [
  {
    image: <img alt="Feature1" src={Features1} width="364" height="430" />,
    title: "Collaboration Teams",
    description:
      "Here you can handle projects together with your team virtually",
  },
  {
    image: <img alt="Feature2" src={Features2} width="364" height="430" />,
    title: "Cloud Storage",
    description:
      "No need to worry about storage because we provide storage up to 2 TB",
  },
  {
    image: <img alt="Feature3" src={Features3} width="364" height="430" />,
    title: "Daily Analytics",
    description:
      "We always provide useful information to make it easier for you every day",
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Features = ({ setSelectedPage }: Props) => {
  return (
    <section id="features" className="py-10">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Features)}
        className="mx-auto w-5/6 pt-20"
      >
        <div className="mb-20 flex flex-col gap-8 md:flex-row md:items-center md:text-center">
          <div className="w-full text-start md:w-2/6">
            <HText>Our Features you can get</HText>
          </div>
          <p className="text-start md:w-2/6">
            We offer a variety of interesting features that can help you
            increase yor productivity at work and manage your project easily
          </p>
          <div className="md:w-2/6">
            <ActionButton setSelectedPage={setSelectedPage}>
              Get Started
            </ActionButton>
          </div>
        </div>
        <motion.div
          className="flex flex-wrap gap-8 md:flex-nowrap"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {features.map((feature: FeatureType) => (
            <Feature
              key={feature.title}
              image={feature.image}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Features;

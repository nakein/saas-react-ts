import HText from "@/shared/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import BenefitGraphic from "@/assets/BenefitGraphic.png";
import Benefit from "../../shared/Benefit";

const benefits: Array<BenefitType> = [
  {
    title: "Free Consulting With Experts Saving Money",
  },
  {
    title: "Online Banking",
  },
  {
    title: "Investment Report Every Month",
  },
  {
    title: "Saving Money For The Future",
  },
  {
    title: "Online Transaction",
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="py-10">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        className="mx-auto w-5/6 justify-between pt-20 md:flex"
      >
        <div className="md:w-2/5">
          <div className="mb-10">
            <HText>What Benefits Will You Get</HText>
          </div>

          <ul className="mb-5 flex flex-col">
            {benefits.map((item: BenefitType, index) => (
              <Benefit key={index} title={item.title} />
            ))}
          </ul>
        </div>
        <div className="md:w-3/6">
          <img alt="benefits" src={BenefitGraphic} />
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;

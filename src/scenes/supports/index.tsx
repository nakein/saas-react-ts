import HText from "@/shared/HText";
import Stars5 from "@/assets/5Stars.png";
import Stars4 from "@/assets/4Stars.png";
import Support from "./Support";
import { SupportType } from "@/shared/types";
import {
  ArrowTrendingUpIcon,
  ChartPieIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const supports: Array<SupportType> = [
  {
    icon: <ArrowTrendingUpIcon className="h-6 w-6"></ArrowTrendingUpIcon>,
    title: "Publishing",
    description:
      "Plan, collaborate, and publishing your content that drives meaningful engagement and growth for your brand",
  },
  {
    icon: <ChartPieIcon className="h-6 w-6"></ChartPieIcon>,
    title: "Analytics",
    description: "Analyze your performance and create gorgeous report",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6"></UserGroupIcon>,
    title: "Engagement",
    description: "Quickly navigate and engage with your audience",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.5 },
  },
};

const Supports = () => {
  return (
    <section className="mx-auto w-full bg-gray-20 pt-20">
      <div className="mx-auto w-5/6">
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="basis-7/12">
            <HText>How we support our partner all over the world</HText>
            <p className="my-10">
              SaaS become a common delivery model for many business application,
              including office software, messaging software, payroll processing
              software, DBMS software, management software
            </p>
            <div className="flex gap-12">
              <div>
                <img alt="5 Stars" src={Stars5} />
                <p className="mt-3 text-gray-100">
                  <b>4.9</b> / 5 rating
                </p>
                <p className="mt-3 font-bold">databriks</p>
              </div>
              <div>
                <img alt="4 Stars" src={Stars4} />
                <p className="mt-3 text-gray-100">
                  <b>4.1</b> / 5 rating
                </p>
                <p className="mt-3 font-bold">Chainalysis</p>
              </div>
            </div>
          </div>
          <motion.div
            className="mt-20 basis-5/12 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.7 }}
            variants={container}
          >
            {supports.map((support: SupportType) => (
              <Support
                key={support.title}
                icon={support.icon}
                title={support.title}
                description={support.description}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Supports;

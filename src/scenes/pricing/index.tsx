import HText from "@/shared/HText";
import { PriceType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import Switch from "./Switch";
import Price from "./Price";
import { useState } from "react";

const prices: Array<PriceType> = [
  {
    priceMonthly: 0,
    priceYearly: 0,
    title: "Free",
    description: "Have a go and test your superpowers",
    benefits: [
      { title: "2 Users" },
      { title: "2 Files" },
      { title: "Public Share & Comments" },
      { title: "Chat Support " },
      { title: "New income apps" },
    ],
    buttonText: "Sign up for free",
    isFeatured: false,
  },
  {
    priceMonthly: 1,
    priceYearly: 8,
    title: "Pro",
    description: "Experiment the power of infinite possibilities",
    benefits: [
      { title: "4 Users" },
      { title: "All apps" },
      { title: "Unlimited editable exports" },
      { title: "Folders and collaboration" },
      { title: "All incoming apps" },
    ],
    buttonText: "Go to pro",
    isFeatured: true,
  },
  {
    priceMonthly: 2,
    priceYearly: 16,
    title: "Business",
    description: "Unveil new superpowers and join the Design Leaque",
    benefits: [
      { title: "All the features of pro plan" },
      { title: "Account success Manager" },
      { title: "Single Sign-On (SSO)" },
      { title: "Co-conception pogram" },
      { title: "Collaboration-Soon" },
    ],
    buttonText: "Go to Business",
    isFeatured: false,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Pricing = ({ setSelectedPage }: Props) => {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="pricing" className="py-10">
      <div className="absolute right-0 z-[-1] h-[500px] w-[500px] rounded-full bg-primary-500 blur-[400px]"></div>
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Pricing)}
        className="mx-auto w-5/6 py-10 md:flex"
      >
        <div className="mx-auto flex flex-col items-center gap-8 text-center">
          <HText>
            Choose The Plan <br /> That's Right For You
          </HText>
          <p className="font-bold">
            Choose the plan that works best for you, feel free to contact us
          </p>
          <Switch isYearly={yearly} handleToggle={() => setYearly(!yearly)} />

          <div className="flex flex-col gap-8 md:flex-row">
            {prices.map((price: PriceType) => (
              <Price
                key={price.title}
                isYearly={yearly}
                isFeatured={price.isFeatured}
                priceMonthly={price.priceMonthly}
                priceYearly={price.priceYearly}
                title={price.title}
                description={price.description}
                benefits={price.benefits}
                buttonText={price.buttonText}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Pricing;

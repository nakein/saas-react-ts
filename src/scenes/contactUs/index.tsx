import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import Person1 from "@/assets/Person1.png";
import Person2 from "@/assets/Person2.png";
import Person3 from "@/assets/Person3.png";
import Person4 from "@/assets/Person4.png";
import Person5 from "@/assets/Person5.png";
import Quote from "@/assets/Quote.png";
import Money from "@/assets/Money.png";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const contactUs = ({ setSelectedPage }: Props) => {
  return (
    <section id="contactus" className="mx-auto w-full bg-secondary-400 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
        className="mx-auto w-5/6 justify-center py-10 md:flex"
      >
        <div className="md:basis-2/4">
          <h1 className="mb-5 basis-3/5 text-6xl font-semibold text-white">
            People are Saying About DoWhith
          </h1>
          <p className="mb-10 w-4/5">
            Everything you need to accept to payment and grow your money of
            manage anywhere on planet
          </p>
          <img alt="quote" src={Quote} className="mb-10" />
          <p className="mb-10 w-4/5">
            I am very helped by this E-wallet application , my days are very
            easy to use this application and its very helpful in my life , even
            I can pay a short time 😍
          </p>
          <p className="mb-10">_ Aria Zinanrio</p>
          <div className="mb-5 flex flex-wrap gap-5">
            <img alt="Person1" src={Person1} />
            <img alt="Person2" src={Person2} />
            <img alt="Person3" src={Person3} />
            <img alt="Person4" src={Person4} />
            <img alt="Person5" src={Person5} />
          </div>
        </div>
        <div className="md:basis-2/4">
          <div className="mx-auto rounded-lg bg-secondary-500 p-5 md:p-10">
            <img className="mx-auto mb-5" alt="Money" src={Money} />
            <h2 className="mb-5 text-center text-3xl text-white">
              Get Started
            </h2>
            <div className="mx-auto md:w-4/5">
              <p className="mb-5">Email</p>
              <input
                type="email"
                className="mb-5 block w-full rounded-md border bg-white px-2 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Enter your email"
              />
              <p className="mb-5">Message</p>
              <textarea
                className="mb-5 block w-full resize-none rounded-md border bg-white px-2 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="What do you say?"
              />
              <button className="mb-5 w-full rounded-lg bg-primary-300 p-4 text-white">
                Request Demo
              </button>
              <p className="text-end">
                or{" "}
                <a href="#" className="text-white">
                  Start Free Trial
                </a>
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default contactUs;

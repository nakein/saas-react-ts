import { useState } from "react";
import { QuoteType, SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import Person1 from "@/assets/Person1.png";
import Person2 from "@/assets/Person2.png";
import Person3 from "@/assets/Person3.png";
import Person4 from "@/assets/Person4.png";
import NextButton from "@/assets/Person5.png";
import Quote from "@/assets/Quote.png";
import Money from "@/assets/Money.png";

const quotes: Array<QuoteType> = [
  {
    author: "_ Aria Zinanrio",
    text: "I am very helped by this E-wallet application , my days are very easy to use this application and its very helpful in my life , even I can pay a short time 😍",
  },
  { author: "_ Author 2", text: "Second quote" },
  { author: "_ Author 3", text: "Third quote" },
  { author: "_ Author 4", text: "Fourth quote" },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const [activeQuote, setActiveQuote] = useState<QuoteType>(quotes[0]);
  const position = quotes.indexOf(activeQuote);
  const handleClick = (index: number) => {
    let quoteSlider;
    if (index === 4) {
      if (position === quotes.length - 1) {
        quoteSlider = quotes[0];
      } else {
        quoteSlider = quotes[position + 1];
      }
    } else {
      quoteSlider = quotes[index];
    }
    setActiveQuote(quoteSlider);
  };

  return (
    <section id="contactus" className="mx-auto w-full bg-secondary-400 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
        className="mx-auto w-5/6 justify-center py-10 md:flex"
      >
        <div className="md:basis-2/4">
          <h1 className="mb-5 basis-3/5 text-5xl font-semibold text-white">
            People are Saying About DoWhith
          </h1>
          <p className="mb-10 w-4/5">
            Everything you need to accept to payment and grow your money of
            manage anywhere on planet
          </p>
          <img alt="quote" src={Quote} className="mb-10" />
          <p className="mb-10 w-4/5">{activeQuote.text}</p>
          <p className="mb-10">{activeQuote.author}</p>
          <div className="mb-5 flex flex-wrap gap-5">
            <img
              alt="Person1"
              src={Person1}
              onClick={() => handleClick(0)}
              className={`cursor-pointer ${
                position === 0
                  ? "rounded-full outline outline-4 outline-offset-2 outline-primary-500"
                  : ""
              }`}
            />
            <img
              alt="Person2"
              src={Person2}
              onClick={() => handleClick(1)}
              className={`cursor-pointer ${
                position === 1
                  ? "rounded-full outline outline-4 outline-offset-2 outline-primary-500"
                  : ""
              }`}
            />
            <img
              alt="Person3"
              src={Person3}
              onClick={() => handleClick(2)}
              className={`cursor-pointer ${
                position === 2
                  ? "rounded-full outline outline-4 outline-offset-2 outline-primary-500"
                  : ""
              }`}
            />
            <img
              alt="Person4"
              src={Person4}
              onClick={() => handleClick(3)}
              className={`cursor-pointer ${
                position === 3
                  ? "rounded-full outline outline-4 outline-offset-2 outline-primary-500"
                  : ""
              }`}
            />
            <img
              alt="Next button"
              src={NextButton}
              onClick={() => handleClick(4)}
              className="cursor-pointer"
            />
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
                className="mb-5 block w-full rounded-md border bg-white p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Enter your email"
              />
              <p className="mb-5">Message</p>
              <textarea
                className="mb-5 block w-full resize-none rounded-md border bg-white p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="What do you say?"
              />
              <button className="mb-5 w-full rounded-lg bg-primary-300 p-4 text-white">
                Request Demo
              </button>
              <p className="text-end text-sm">
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

export default ContactUs;

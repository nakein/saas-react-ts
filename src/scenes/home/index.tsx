import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorDescript from "@/assets/SponsorDescript.png";
import SponsorGrammarly from "@/assets/SponsorGrammarly.png";
import SponsorIntercom from "@/assets/SponsorIntercom.png";
import SponsorNotion from "@/assets/SponsorNotion.png";
import SponsorUnsplash from "@/assets/SponsorUnsplash.png";
import { PlayCircleIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";
import ActionButton from "@/shared/ActionButton";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  return (
    <section id="home" className="gap-16 py-10 md:min-h-full md:pb-0">
      {/* RADIAL BACKGROUNDS */}
      <div className="absolute left-[-250px] top-[-250px] z-[-1] h-[500px] w-[500px] rounded-full bg-primary-500 blur-[400px]"></div>
      <div className="absolute bottom-0 right-0 z-[-1] h-[500px] w-[500px] rounded-full bg-primary-500 blur-[400px]"></div>
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        className="mx-auto mt-10 w-5/6 justify-center md:flex"
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-32 h-5/6 md:basis-8/12">
          {/* HEADINGS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute md:before:-bottom-12 md:before:-left-5 md:before:content-homepageline">
                <h1 className="text-5xl font-bold text-black md:text-7xl">
                  We’re here to Increase your Productivity
                </h1>
              </div>
            </div>
            <p className="mt-10 text-black md:mt-20 md:w-4/5">
              Let's make your work more organize and easily using the Taskio
              Dashboard with many of the latest featuresin managing work every
              day.
            </p>
          </motion.div>
          {/* ACTIONS */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="mt-8 flex items-center gap-4 md:gap-8"
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Try free trial
            </ActionButton>
            <button className="flex gap-3 rounded-full border-2 border-transparent px-4 py-3 text-black transition duration-500 hover:border-black">
              <PlayCircleIcon className="h-6 w-6" />
              View Demo
            </button>
          </motion.div>
        </div>

        {/* IMAGE */}
        <div className="mt-20 flex basis-5/6 justify-center md:h-fit md:justify-items-end md:self-center">
          <img alt="home-page-graphic" src={HomePageGraphic} />
        </div>
      </motion.div>

      {/* SPONSORS */}

      {isAboveMediumScreens && (
        <div className="mt-20">
          <h1 className="text-center text-[40px] font-bold text-black">
            More than 25,000 teams use Collabs
          </h1>
          <div className="mt-10 h-[150px] w-full py-5">
            <div className="mx-auto w-5/6">
              <div className="flex w-3/5 items-center justify-between gap-14">
                <img alt="unsplash-sponsor" src={SponsorUnsplash} />
                <img alt="notion-sponsor" src={SponsorNotion} />
                <img alt="intercom-sponsor" src={SponsorIntercom} />
                <img alt="descript-sponsor" src={SponsorDescript} />
                <img alt="grammarly-sponsor" src={SponsorGrammarly} />
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;

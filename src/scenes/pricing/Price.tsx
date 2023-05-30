import useMediaQuery from "@/hooks/useMediaQuery";
import Benefit from "@/shared/Benefit";
import { BenefitType } from "@/shared/types";

type Props = {
  isYearly: boolean;
  priceMonthly: number;
  priceYearly: number;
  title: string;
  description: string;
  benefits: Array<BenefitType>;
  buttonText: string;
  isFeatured: boolean;
};

const Price = ({
  isYearly,
  priceMonthly,
  priceYearly,
  title,
  description,
  benefits,
  buttonText,
  isFeatured,
}: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <div
      className={`rounded-lg p-5 text-center shadow-md md:my-20 md:w-4/12 ${
        isFeatured ? "bg-primary-500 text-white md:scale-110" : "bg-white"
      } `}
    >
      {isFeatured && isAboveMediumScreens && (
        <div className="absolute bottom-0 right-0 z-[-1] h-3/4 w-full rounded-t-full bg-primary-200"></div>
      )}
      <div>
        <h2
          className={`p-5 text-3xl font-semibold ${
            isFeatured ? "text-white" : "text-black"
          }`}
        >
          {title}
        </h2>
        <p className="mx-auto mb-5 w-4/5">{description}</p>
        {isYearly ? (
          <p
            className={`relative mb-5 text-5xl font-semibold ${
              isFeatured ? "text-white" : "text-black"
            }`}
          >
            <span
              className={`left-16 text-sm before:absolute ${
                isFeatured ? "text-white" : "text-gray-50"
              }`}
            >
              $
            </span>
            {priceYearly}
          </p>
        ) : (
          <p
            className={`relative mb-5 text-5xl font-semibold ${
              isFeatured ? "text-white" : "text-black"
            }`}
          >
            <span
              className={`left-16 text-sm before:absolute ${
                isFeatured ? "text-white" : "text-gray-50"
              }`}
            >
              $
            </span>
            {priceMonthly}
          </p>
        )}
        {isFeatured && isYearly && (
          <button className="mb-2 rounded-lg bg-primary-100 p-2 text-white">
            Save $50 a year
          </button>
        )}
        <div className="mb-5 rounded-lg bg-gray-20 p-5">
          <div className="text-start">
            {benefits.map((benefit: BenefitType) => (
              <Benefit title={benefit.title} key={benefit.title} />
            ))}
          </div>
          {isFeatured ? (
            <button className="mt-5 w-4/5 rounded-lg bg-primary-500 p-4 text-white drop-shadow-xl">
              {buttonText}
            </button>
          ) : (
            <button className="mt-5 w-4/5 rounded-lg bg-white p-4 text-primary-500 drop-shadow-xl">
              {buttonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Price;

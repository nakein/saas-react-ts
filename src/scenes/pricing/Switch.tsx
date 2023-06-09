import React from "react";

type Props = {
  isYearly: boolean;
  handleToggle: (e: React.ChangeEvent<HTMLElement>) => void;
};

const Switch = ({ isYearly, handleToggle }: Props) => {
  return (
    <>
      <label className="relative mb-5 h-16 w-full cursor-pointer items-center rounded-lg bg-white shadow-lg md:w-3/12">
        <input
          type="checkbox"
          className="peer sr-only"
          checked={isYearly}
          onChange={handleToggle}
        />
        <span className="absolute left-2 top-2 w-[46%] rounded-lg bg-primary-500 p-3 text-white transition-all duration-200 peer-checked:bg-white peer-checked:text-black">
          Bill Monthly
        </span>
        <span className="absolute right-2 top-2 w-[46%] rounded-lg bg-white p-3 text-black transition-all duration-200 peer-checked:bg-primary-500 peer-checked:text-white">
          Bill Yearly
        </span>
      </label>
    </>
  );
};

export default Switch;

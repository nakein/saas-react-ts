import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
};

const ActionButton = ({ children, setSelectedPage }: Props) => {
  return (
    <AnchorLink
      className="rounded-full bg-primary-300 px-4 py-3 text-white transition duration-500 hover:border-2 hover:bg-white hover:text-primary-300"
      onClick={() => setSelectedPage(SelectedPage.Pricing)}
      href={`#${SelectedPage.Pricing}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;

import React from "react";

type Props = {
  children: React.ReactNode;
};

const HText = ({ children }: Props) => {
  return (
    <h1 className="basis-3/5 text-5xl font-semibold text-black">{children}</h1>
  );
};

export default HText;

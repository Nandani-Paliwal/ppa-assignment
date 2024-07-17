import React from "react";
import { clsx } from "clsx";

export interface HeadingProps {
  as?: keyof JSX.IntrinsicElements;
  type?: "h1" | "h2" | "h3" | "h4";
  className?: string;
  children: React.ReactNode;
}

const Heading: React.FC<HeadingProps> = ({
  as: Heading = "h2",
  type = "",
  className = "",
  children,
}) => {
  const headingStyles: { [key: string]: string } = {
	h1: 'text-[64px] leading-[76px] font-semibold',
    h2: "text-4xl leading-[44px] font-semibold",
    h3: "text-[28px]  leading-9 font-semibold",
    h4: "text-xl leading-[28px] font-semibold",
  };

  return (
    <Heading className={clsx(headingStyles[type], className)}>
      {children}
    </Heading>
  );
};

export { Heading };

import React from "react";
import { clsx } from "clsx";

export interface ParagraphProps {
  type?: "para-1" | "para-2" | "para-3" | "para-4";
  weight?: "normal" | "medium";

  className?: string;
  children: React.ReactNode;
}

const Paragraph: React.FC<ParagraphProps> = ({
  type = "paraM",
  weight = "normal",
  className = "",
  children,
}) => {
  const ParagraphStyles: { [key: string]: string } = {
    "para-1": "text-para-1",
    "para-2": "text-para-2",
    "para-3": "text-xs md:te1t-para-3",
    "para-4": "text-para-4",
  };

  const weightStyles: { [key: string]: string } = {
    normal: "font-normal",
    medium: "font-medium",
  };

  return (
    <p className={clsx(ParagraphStyles[type], weightStyles[weight], className)}>
      {children}
    </p>
  );
};

export { Paragraph };

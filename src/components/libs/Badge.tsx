import React, { ReactNode } from "react";

type BadgeProps = {
  children?: ReactNode;
  className?: string;
};

function Badge({ children, className, ...props }: BadgeProps) {
  return (
    <div
      className={`bg-gradient py-1 px-3 text-white w-fit rounded-full font-semibold !${
        className ? className : ""
      }`}
      {...props}
    >
      {children}
    </div>
  );
}

export default Badge;

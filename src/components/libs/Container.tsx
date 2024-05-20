import { ReactElement } from "react";
import { ElementType } from "./Typography";

type ContainerProps = {
  children?: ReactElement | ReactElement[];
};

export default function Container({
  children,
  className,
  ...props
}: ContainerProps & ElementType) {
  return (
    <div {...props} className={`container w-4/5 ${className}`}>
      {children}
    </div>
  );
}

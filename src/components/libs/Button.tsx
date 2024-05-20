import { ReactElement, ReactNode } from "react";
import { ElementType } from "./Typography";

type ButtonProps = {
  label: string;
  onClick: () => void;
  icon?: ReactElement;
  children?: ReactNode;
};

export default function Button({
  label,
  onClick,
  icon,
  children,
  ...props
}: ButtonProps & ElementType & any) {
  return (
    <div
      className={`w-fit text-white bg-black p-2 font-md font-medium ${props.className}`}
      {...props}
    >
      <div className="flex space-x-2 ease-in-out duration-300 border-2 px-8 py-2 border-transparent hover:border-white">
        <button onClick={onClick}>{label || children}</button>
        {icon ? icon : null}
      </div>
    </div>
  );
}

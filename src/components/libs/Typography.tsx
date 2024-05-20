import { ReactNode } from "react";

export type ElementType = React.DetailedHTMLProps<
  React.HTMLAttributes<any>,
  any
>;

type ChildrenProps = {
  children: ReactNode;
  className?: string;
};

const TextItalic = ({ children, className, ...props }: ChildrenProps) => {
  return (
    <p
      className={"text-md italic font-bold leading-6 primaryText " + className}
      {...props}
    >
      {children}
    </p>
  );
};

const Title = ({ children, className, ...props }: ChildrenProps) => {
  return (
    <p
      className={"text-lg font-bold leading-6 primaryText " + className}
      {...props}
    >
      {children}
    </p>
  );
};
const Subtitle = ({ children, className, ...props }: ChildrenProps) => {
  return (
    <p
      className={"text-3md font-bold leading-8 primaryText " + className}
      {...props}
    >
      {children}
    </p>
  );
};

const Paragraph = ({ children, className, ...props }: ChildrenProps) => {
  return (
    <p
      className={"text-sm font-normal leading-6 primaryText " + className}
      {...props}
    >
      {children}
    </p>
  );
};

export const Typography = {
  TextItalic,
  Title,
  Subtitle,
  Paragraph,
};

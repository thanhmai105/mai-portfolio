import { ReactElement } from "react";
import { Typography } from "../libs/Typography";

type ContactItemProps = {
  icon?: ReactElement;
  title: string;
};

export default function ContactItem({ icon, title }: ContactItemProps) {
  return (
    <div className="flex items-center space-x-2">
      {icon && (
        <div className="w-10 h-10 bg-slate-100 flex justify-center items-center rounded-full">
          {icon}
        </div>
      )}
      <Typography.TextItalic>{title}</Typography.TextItalic>
    </div>
  );
}

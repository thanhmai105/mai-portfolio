import { ElementType } from "./Typography";

export default function Divider({
  className,
  ...props
}: {
  className?: string | (number & ElementType);
}) {
  return (
    <div {...props} className={`bg-transparent h-[1px] ${className}`}></div>
  );
}

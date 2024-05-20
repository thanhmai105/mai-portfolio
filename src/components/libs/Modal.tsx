import React, { ReactNode, useState } from "react";
import { Icons } from "../../assets";
import { AnimatePresence, motion } from "framer-motion";

type ModalProps = {
  headerComponent?: ReactNode;
  footerComponent?: ReactNode;
  children?: ReactNode;
  isOpen?: boolean;
};

export default function Modal({
  headerComponent,
  footerComponent,
  children,
  isOpen = true,
  ...props
}: ModalProps) {
  const [open, setOpen] = useState(isOpen);

  console.log("open", open);
  console.log("isOpen", isOpen);
  if (!open) return null;

  return (
    <div className="absolute w-full h-full top-0 left-0">
      <div className="absolute z-1 w-full h-full top-0 left-0 opacity-50 bg-gradient"></div>
      <AnimatePresence>
        <motion.div className="flex justify-center items-center w-full h-full">
          <div className="space-y-8 absolute z-2 bg-white p-4 rounded-lg w-3/5">
            <div className="flex justify-between ">
              <div>{headerComponent}</div>
              <div
                onClick={() => {
                  setOpen(false);
                }}
                className="bg-gradient flex justify-center items-center rounded-full p-2"
              >
                <Icons.Close />
              </div>
            </div>
            {children && <div>{children}</div>}
            {footerComponent && <div>{footerComponent}</div>}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
